INSERT INTO
    doctors (first_name,last_name) 
VALUES
    ('Sathish','Modugu'),
    ('Karin' , 'Schott');
INSERT INTO
    appointments (doctor_id, patient_first_name, patient_last_name, date, time, kind)
VALUES
    (
        1,
        'Jonny',
        'Walker',
        'Back pain',
        '2001-09-28',
        '12:00:00',
        'New Patient' 
    ),
    (
        2,
        'Diane',
        'Strong',
        'Check up',
        '2001-09-28',
        '13:00:00',
        'Follow-up'
    );
