DROP TABLE IF EXISTS appointments;
DROP TABLE IF EXISTS doctors;

CREATE TYPE appointment_type AS ENUM ('New Patient', 'Follow-up');

CREATE TABLE doctors (
    id SERIAL PRIMARY KEY, 
    first_name TEXT,
    last_name TEXT
);

CREATE TABLE appointments (
    id SERIAL PRIMARY KEY, 
    doctor_id int REFERENCES doctors (id) ON DELETE CASCADE,
    patient_first_name TEXT,
    patient_last_name TEXT,
    date DATE,
    time time,
    kind appointment_type
);
