DROP TABLE IF EXISTS Users;
CREATE TABLE IF NOT EXISTS Users (UserId INTEGER PRIMARY KEY, Username TEXT, Email TEXT, Token TEXT);
INSERT INTO Users (UserId, Username, Email, Token) VALUES (1, 'drew', 'drew.king@cyberwoven.com', 'ZHJldzpteXBhc3M='), (2, 'jaron', 'jaron.owens@cyberwoven.com', 'amFyb246aGlzcGFzcw==');