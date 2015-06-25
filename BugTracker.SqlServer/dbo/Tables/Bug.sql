CREATE TABLE [dbo].[Bug] (
    [Id]     INT           IDENTITY (1, 1) NOT NULL,
    [Title]  VARCHAR (140) NOT NULL,
    [Description] VARCHAR (500) NOT NULL,
    [Status] TINYINT       NOT NULL, 
    [CreatedDate] DATETIME2(2) CONSTRAINT [DF_Bug_CreatedDate] DEFAULT (getutcdate()) NOT NULL,
    [LastActivityDate] DATETIME2(2) NOT NULL DEFAULT (getutcdate()), 
    CONSTRAINT [PK_Bug] PRIMARY KEY CLUSTERED ([Id] ASC)
);

