DROP TABLE IF EXISTS appointments;

CREATE TYPE appointment_type AS ENUM ('New Patient', 'Follow-up');

CREATE TABLE doctors (
    id SERIAL PRIMARY KEY, 
    first_name TEXT,
    last_name TEXT
);

CREATE TABLE appointments (
    id SERIAL PRIMARY KEY, 
    doctor TEXT,
    img TEXT,
    patient TEXT,
    reason_for_visit TEXT,
    notes TEXT,
    date TEXT
);
