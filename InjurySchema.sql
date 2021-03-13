CREATE TABLE dataentry (
    pain integer,
    excersise text(5),
    setback text(5),
    setbackdesc text(500),
    docvisit text(5),
    doctype text(50),
    notes text(2000),
    todaydate text(20),
    currenttime text(20)
);



INSERT INTO dataentry (pain, excersise, setback, setbackdesc, docvisit, doctype, notes, todaydate, currenttime) VALUES 
('4', 'YES', 'YES', 'poor desk posture', 'YES', 'physiotherapist', 'physio noted improvement to neck muscles', '2020-01-25', '13:35:12')