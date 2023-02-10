USE master
GO

IF NOT EXISTS (
    SELECT name
    FROM sys.databases
    Where name = 'TodoAppDB'
)

CREATE DATABASE [TodoAppDB]
GO

CREATE TABLE Users
(
    UserId UNIQUEIDENTIFIER NOT NULL PRIMARY KEY,
    [Name] varchar(255),
);
GO

CREATE TABLE TodoList
(
    TodoListId UNIQUEIDENTIFIER NOT NULL PRIMARY KEY, -- primary key column
    [Name] varchar(50),
    UserId UNIQUEIDENTIFIER FOREIGN KEY REFERENCES Users(UserId),
    -- specify more columns here
);
GO

CREATE TABLE ListItems
(
    ListItemIds UNIQUEIDENTIFIER NOT NULL PRIMARY KEY,
    ListId UNIQUEIDENTIFIER FOREIGN KEY REFERENCES TodoList(TodoListId),
    [Description] varchar(255) NOT NULL,
    IsCompleted BIT
)
GO