CREATE TABLE [dbo].[Bug] (
    [Id]     INT           IDENTITY (1, 1) NOT NULL,
    [Title]  VARCHAR (140) NOT NULL,
    [Description] VARCHAR (500) NOT NULL,
    [Status] TINYINT       NOT NULL
);

