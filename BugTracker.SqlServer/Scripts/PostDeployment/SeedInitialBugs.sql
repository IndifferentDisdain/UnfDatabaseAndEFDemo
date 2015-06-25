IF NOT EXISTS(SELECT 1 FROM Bug)
BEGIN

INSERT INTO Bug(Title, Description, Status, CreatedDate, LastActivityDate) VALUES ('First Sample Bug', 'Sample Description for bug', 0, '2015-06-01', '2015-06-01')
INSERT INTO Bug(Title, Description, Status, CreatedDate, LastActivityDate) VALUES ('Second Sample Bug', 'Sample Description for bug', 0, '2015-06-02', '2015-06-02')
INSERT INTO Bug(Title, Description, Status, CreatedDate, LastActivityDate) VALUES ('Third Sample Bug', 'Sample Description for bug', 0, '2015-06-03', '2015-06-03')
INSERT INTO Bug(Title, Description, Status, CreatedDate, LastActivityDate) VALUES ('Fourth Sample Bug', 'Sample Description for bug', 1, '2015-06-04', '2015-06-04')
INSERT INTO Bug(Title, Description, Status, CreatedDate, LastActivityDate) VALUES ('Fifth Sample Bug', 'Sample Description for bug', 1, '2015-06-05', '2015-06-05')
INSERT INTO Bug(Title, Description, Status, CreatedDate, LastActivityDate) VALUES ('Sixth Sample Bug', 'Sample Description for bug', 1, '2015-06-06', '2015-06-06')
INSERT INTO Bug(Title, Description, Status, CreatedDate, LastActivityDate) VALUES ('Seventh Sample Bug', 'Sample Description for bug', 2, '2015-06-07', '2015-06-07')
INSERT INTO Bug(Title, Description, Status, CreatedDate, LastActivityDate) VALUES ('Eighth Sample Bug', 'Sample Description for bug', 2, '2015-06-08', '2015-06-08')
INSERT INTO Bug(Title, Description, Status, CreatedDate, LastActivityDate) VALUES ('Ninth Sample Bug', 'Sample Description for bug', 2, '2015-06-09', '2015-06-09')

END