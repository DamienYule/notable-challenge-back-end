const express = require("express");
const appointments = express.Router();
const {
  fetchAllApts,
  fetchApt,
  newApt,
  updateApt,
  deleteApt
} = require("../queries/aptsQueries");

appointments.get("/", async (req, res) => {
  const {doctor_id, date} = req.query
  const allApts = await fetchAllApts(doctor_id);
  const filteredApt = allApts.payload.filter((apt)=>{return apt.date.toISOString().substring(0, 10) == date})
  res.json(filteredApt);  
});

appointments.get("/:id", async (req, res) => {
  const { id } = req.params;
  const apt = await fetchApt(id);
  res.json(apt);
});

appointments.post("/", async (req, res) => {
  const time = req.body.time
  const min = parseInt(time.split(":")[1])
  if(min%15 !== 0){
    res.json({ success: false, payload: "Not an interval of 15 min" })
  }
  else
  {
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