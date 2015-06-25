IF NOT EXISTS(SELECT 1 FROM Note)
BEGIN

INSERT INTO Note(BugId, Text, CreatedDate) VALUES (1, 'First note', '2015-06-15')

END