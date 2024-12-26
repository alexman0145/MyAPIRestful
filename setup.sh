#!/bin/bash

set -e # arrête le script en cas d'erreur

# Variables
CONTAINER_NAME="mssqlserver"
SQL_FILE="./OwlCreate.sql"
PASSWORD="Password123456789"
SQLCMD_PATH="/opt/mssql-tools/bin/sqlcmd"
MIGRATION_PROJECT="MigrationProject"
DOTNET_TEST_PROJECT="MonApiTests"

start_container() {
    echo "Starting the docker containter..."
    docker-compose up -d
    echo "Container started."
}

wait_for_sql_server() {
    echo "Waiting for SQL Server to start..."
    until docker exec $CONTAINER_NAME $SQLCMD_PATH -S localhost -U SA -P "$PASSWORD" -Q "SELECT 1" &>/dev/null; do
        echo -n "."
        sleep 2
    done
    echo "SQL Server is ready!"
}

run_migration() {

echo "Running database migration..."
dotnet ef database update --project $MIGRATION_PROJECT --startup-project $MIGRATION_PROJECT 
echo "Database migration completed."
}

copy_and_execute_sql() {
    echo "Copying the database setup script into the container..."
    docker cp $SQL_FILE $CONTAINER_NAME:/tmp/OwlCreate.sql

    echo "Running the SQL script..."
    docker exec $CONTAINER_NAME $SQLCMD_PATH -S localhost -U SA -P "$PASSWORD" -d master -i /OwlCreate.sql
    echo "Database setup complete."
}



run_tests() {
    echo "Running tests in $DOTNET_TEST_PROJECT..."
    cd $DOTNET_TEST_PROJECT
    dotnet test
    cd ..
    echo "Tests complete."
}

# Main workflow
start_container
wait_for_sql_server
run_migration
copy_and_execute_sql
run_tests

echo "All tasks completed successfully."
