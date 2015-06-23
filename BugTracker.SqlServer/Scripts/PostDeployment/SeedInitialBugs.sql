IF NOT EXISTS(SELECT 1 FROM Bug)
BEGIN

INSERT INTO Bug(Title, Description, Status) VALUES ('First Sample Bug', 'Sample Description for bug', 0)
INSERT INTO Bug(Title, Description, Status) VALUES ('Second Sample Bug', 'Sample Description for bug', 0)
INSERT INTO Bug(Title, Description, Status) VALUES ('Third Sample Bug', 'Sample Description for bug', 0)
INSERT INTO Bug(Title, Description, Status) VALUES ('Fourth Sample Bug', 'Sample Description for bug', 1)
INSERT INTO Bug(Title, Description, Status) VALUES ('Fifth Sample Bug', 'Sample Description for bug', 1)
INSERT INTO Bug(Title, Description, Status) VALUES ('Sixth Sample Bug', 'Sample Description for bug', 1)
INSERT INTO Bug(Title, Description, Status) VALUES ('Seventh Sample Bug', 'Sample Description for bug', 2)
INSERT INTO Bug(Title, Description, Status) VALUES ('Eighth Sample Bug', 'Sample Description for bug', 2)
INSERT INTO Bug(Title, Description, Status) VALUES ('Ninth Sample Bug', 'Sample Description for bug', 2)

END