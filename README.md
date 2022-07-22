# Notable back end challenge

- In order to see all `CRUD` operations you can use the browser and a tool like `Insomnia` or `Postman`.

- Data base is hosted on [Heroku](https://arcane-scrubland-59259.herokuapp.com/).
### Get requests
- Get all doctors here => [https://arcane-scrubland-59259.herokuapp.com/doctors](https://arcane-scrubland-59259.herokuapp.com/doctors)
- Get all apointments for a specific doctor on a specific day by querying with doctor_id & date => [https://arcane-scrubland-59259.herokuapp.com/appointments?doctor_id=1&date=2022-07-25](https://arcane-scrubland-59259.herokuapp.com/appointments?doctor_id=1&date=2022-07-25)

### Posting with Insomnia 
Use this url
```
https://arcane-scrubland-59259.herokuapp.com/appointments
```
- Every appointment has it's own unique ID, therefore to delete an appointment you can pass the ID as a parameter in the request 
  `https://arcane-scrubland-59259.herokuapp.com/appointments/7`
  
Use this object in the body for posting 
```
{
    "doctor_id": 2,
    "patient_first_name": "Jonny",
    "patient_last_name": "Walker",
    "date": "2022-07-25",
    "time": "12:15:22",
    "kind": "New Patient"
		}

```

- Change the minutes on your time variable to not be a division of 15 and see what happens.
- Post the same date, time, and doctor 3 times and see what happens. 


