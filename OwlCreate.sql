IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'owl')
BEGIN
    CREATE DATABASE owl;
END
GO

USE owl;
GO
