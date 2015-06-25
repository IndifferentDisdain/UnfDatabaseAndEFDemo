CREATE TABLE [dbo].[Note]
(
    [Id] INT IDENTITY (1,1) NOT NULL,
    [BugId] INT NOT NULL,
    [Text] VARCHAR(500) NOT NULL,
    [CreatedDate] DATETIME2(2) CONSTRAINT [DF_Note_CreatedDate] DEFAULT (getutcdate()) NOT NULL,
    CONSTRAINT [FK_Note_Bug] FOREIGN KEY ([BugId]) REFERENCES [dbo].[Bug] ([Id]),
    CONSTRAINT [PK_Note] PRIMARY KEY CLUSTERED ([Id] ASC)
);

GO

CREATE INDEX [IX_Note_BugId] ON [dbo].[Note]([BugId] ASC);
GO
