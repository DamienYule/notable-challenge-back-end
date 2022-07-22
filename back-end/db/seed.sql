INSERT INTO
    doctors (first_name,last_name,img) 
VALUES
    ('Sathish','Modugu'),
    ('Karin' , 'Schott');

    (
        'Katarina', 'Eisinger',
        'https://dynl.mktgcdn.com/p/BCNRAwXLS7vyRWoiXc5pyOm70nGQ4eKRVrMWrrTkcbk/198x198.png'
    ),
    (
        'Janice','James Aubey',
        'https://dynl.mktgcdn.com/p/6p8jR9GU1NL4s71Z0vkbP8TUpcVTz3dXQurpak6_GNY/198x198.png'
    ),
    (
        'Hoosna', 'Haque',
        'https://dynl.mktgcdn.com/p/jtv06hAVA9iF_VT7wBxb5FEI0NseLltRW3cR5v1luio/640x640.jpg'
    ),
    (
        'Asad' ,'R.Siddiqi',
        'https://dynl.mktgcdn.com/p/QB6wPKDFH1ahm6IZlSRcRqrSJDhdJ4b1z8Y09ACrlTk/800x800.jpg'
    ),
    (
        'Jennifer', 'Soo Hoo',
        'https://dynl.mktgcdn.com/p/Q4T4-2dlubVYL2wT-0qWuxkoL8t6wAMUSZuE_svD-mQ/198x198.png'
    ),
    (
        'Jaspal', 'R. Singh',
        'https://dynl.mktgcdn.com/p/pwqSAgksrDI6sT1jR6Q3L6eGzD7SMOE4qg0qn4HkzWM/199x199.png'
    ),
    (
        'Victoria', 'Harrison',
        'https://dynl.mktgcdn.com/p/4qprjLt_-jbiyvOnV7Op9ItXJaoCj1-9C0wmmH9uYMQ/199x199.png'
    ),
    (
        'Clark'  ,'Smith',
        'https://dynl.mktgcdn.com/p/xWVghBrMeDWicHw1dpVbCKiBxB9UUGp0VVNMC3JhRKA/198x198.png'
    ),
    (
        'Ben', 'Shin',
        'https://dynl.mktgcdn.com/p/B2fVcJNksxVIdThI0CDy4ZSMr0XEbWzMIbFCR3QlkyI/420x420.jpg'
    ),
    (
     'Christopher', 'Irobunda',
    
      'https://dynl.mktgcdn.com/p/U7jF9uTyvtljQGj-0kZENkP_Y4O5OnyBRHAP6jAw1YU/198x198.png'
    ),
    (
        'Stephanie', 'Lovinsky-Desir',
        'https://dynl.mktgcdn.com/p/kAZnGCN6bQDdGxDDhHKGMfxKGy6RIAeVo8MQJ59MKR0/198x198.png'
    ),
    (
        'Daniel', 'Rafii',
        'https://dynl.mktgcdn.com/p/cVQs_8pVznRsqNubQUFgGqdHDBaIxuaMIcjWq7p1Mgo/541x541.jpg'
    );
];

INSERT INTO
    appointments (doctor_id, patient_first_name, patient_last_name, date, time, kind)
VALUES
    (
        1,
        'Jonny',
        'Walker',
        '2001-09-28',
        '12:00:00',
        'New Patient' 
    ),
    (
        2,
        'Diane',
        'Strong',
        '2001-09-28',
        '13:00:00',
        'Follow-up'
    );
