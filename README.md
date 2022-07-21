# Notable back end challenge

- In order to see all your `CRUD` operations you can use the browser and a tool like `Insomnia` or `Postman`.

- Data base is hosted on [Heroku](https://arcane-scrubland-59259.herokuapp.com/).
### Get requestes can be done in the browser
- Get all doctors here => [https://arcane-scrubland-59259.herokuapp.com/doctors](https://arcane-scrubland-59259.herokuapp.com/doctors)
- Get all apointments for a specific doctor on a specific day by querying with doctor_id & date => [https://arcane-scrubland-59259.herokuapp.com/appointments?doctor_id=1&date=2022-07-25](https://arcane-scrubland-59259.herokuapp.com/appointments?doctor_id=1&date=2001-09-28)

### Posting in with Insomnia 
Use this url
```
https://arcane-scrubland-59259.herokuapp.com/appointments
```
Use this object in the body
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
- Change the minutes on time to not be a devision of 15 and see what happens.
- Post the same date and time 3 times and see what happens. 
