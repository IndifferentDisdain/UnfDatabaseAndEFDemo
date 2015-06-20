IF NOT EXISTS(SELECT 1 FROM Bug)
BEGIN

INSERT INTO Bug(Title, Status) VALUES ('First Sample Bug', 0)
INSERT INTO Bug(Title, Status) VALUES ('Second Sample Bug', 0)
INSERT INTO Bug(Title, Status) VALUES ('Third Sample Bug', 0)
INSERT INTO Bug(Title, Status) VALUES ('Fourth Sample Bug', 1)
INSERT INTO Bug(Title, Status) VALUES ('Fifth Sample Bug', 1)
INSERT INTO Bug(Title, Status) VALUES ('Sixth Sample Bug', 1)
INSERT INTO Bug(Title, Status) VALUES ('Seventh Sample Bug', 2)
INSERT INTO Bug(Title, Status) VALUES ('Eighth Sample Bug', 2)
INSERT INTO Bug(Title, Status) VALUES ('Ninth Sample Bug', 2)

END