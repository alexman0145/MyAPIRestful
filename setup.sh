#!/bin/bash

# Start the Docker container in detached mode
echo "Starting the Docker container (15 sec delay to intialise docker)..."
sleep 15 
docker-compose up -d

# Confirm the container is running
echo "Checking container status..."
docker-compose ps

# Wait for the SQL Server to fully start
echo "Waiting for the SQL Server to initialize (200 sec)..."
sleep 200  # Adjust this delay if SQL Server takes longer to start up

# Copy the setup script into the container
echo "Copying the database setup script..."
docker cp ./OwlCreate.sql mssqlserver:/OwlCreate.sql

# Install sqlcmd in the container and run the SQL script
echo "Installing sqlcmd and running database setup..."
docker exec mssqlserver /bin/bash -c "/opt/mssql-tools18/bin/sqlcmd -S localhost -U SA -P 'Password123456789' -d master -i /OwlCreate.sql -C"

echo "Database setup complete."

# Run tests in the .NET project
echo "Running tests in TestProject2..."
cd MonapiTests
dotnet test

echo "All tasks completed successfully."
echo "You can now run 'dotnet test' to test the application."
