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

# Add Package Entity framework to the project
echo "Add a dotnet ef package to the project..."
sleep 15
cd MonApiRestful
echo "Adding Entity Framework packages to the project..."
echo "Start add Entity Framework Core..."
sleep 15
dotnet add package Microsoft.EntityFrameworkCore
echo "Start add Entity Framework Core SQL Server..."
sleep 15
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
echo "Start add Entity Framework Core Tools..."
sleep 15
dotnet add package Microsoft.EntityFrameworkCore.Tools
echo "Start add Entity Framework Core Design..."
sleep 15
dotnet add package Microsoft.EntityFrameworkCore.Design
echo "Check to verify the packages have been added for can't have error..."
sleep 15
dotnet tool install --global dotnet-ef

# Run the database migrations
echo "Running database migrations..."
sleep 15
dotnet ef migrations add InitialCreate3
echo "Udpate migration..."
sleep 15
dotnet ef database update


echo "Database setup complete."

# Run tests in the .NET project
echo "Running tests in TestProject2..."
cd MonapiTests
dotnet test

echo "Installing npm pakages form to execute the angular project..."
sleep 15
cd /MyAPIRestful/gestion-produits
npm install -g @angular/cli
npm install @angular/core


echo "All tasks completed successfully."
echo "You can now run the API back-end and Angular front-end projects. You can use dotnet run and ng serve respectively."
