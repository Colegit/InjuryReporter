CREATE TABLE injury (
    pain integer,
    excersise text(5),
    setback text(5),
    setbackdesc text(500),
    docvisit text(5),
    visitdesc text(50)
    notes text(2000),
    todaydate text(20),
    currenttime text(20)
);



INSERT INTO injury (pain, excersise, setback, setbackdesc, docvisit, notes, todaydate, currenttime) VALUES 
('4', 'YES', 'NO', 'poor desk posture', 'YES', 'physiotherapist', 'physio noted improvement to neck muscles', '2020-01-25', '13:35:12')