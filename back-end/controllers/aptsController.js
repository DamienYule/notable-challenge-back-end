const express = require("express");
const appointments = express.Router();
const {
  fetchAllApts,
  fetchApt,
  newApt,
  updateApt,
  deleteApt
} = require("../queries/aptsQueries");
const appointments_for_doc_at_time = async (doctor_id,date) =>{
  const allApts = await fetchAllApts(doctor_id);
  const filteredApt = allApts.payload.filter((apt)=>{return apt.date.toISOString().substring(0, date.length) == date})
  return filteredApt 
}
appointments.get("/", async (req, res) => {
  const {doctor_id, date} = req.query
  const filteredApt = await appointments_for_doc_at_time(doctor_id,date)
  res.json(filteredApt);  
});

appointments.get("/:id", async (req, res) => {
  const { id } = req.params;
  const apt = await fetchApt(id);
  res.json(apt);
});

appointments.post("/", async (req, res) => {
  const {doctor_id, time, date} = req.body
  const min = parseInt(time.split(":")[1])
  const filteredApt = await appointments_for_doc_at_time(doctor_id, date)
  const existingAppts = filteredApt.filter((apt)=>{return apt.time == time})
  if(min%15 !== 0){
    res.json({ success: false, payload: "Not an interval of 15 min" })
  } else if (existingAppts.length > 2) {
    res.json({ success: false, payload: "Too many appointments at this time for this doctor" })
  }  
  else {
    const createdApt = await newApt(req.body);
    res.json(createdApt);
  }
});

appointments.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedApt = await updateApt(id, req.body);
  res.json(updatedApt);
});

appointments.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedApt = await deleteApt(id)
  res.json(deletedApt)
});

module.exports = appointments;