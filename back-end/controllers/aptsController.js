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
  console.log(allApts,"hello")
  const filteredApt = allApts.filter((apt)=>{return apt.payload.date.substring(0, 10) == date})
  res.json(filteredApt);  
});

appointments.get("/:id", async (req, res) => {
  const { id } = req.params;
  const apt = await fetchApt(id);
  res.json(apt);
});

appointments.post("/", async (req, res) => {
  // const time = req.body.time
  // min = time parse int and substring
  // if(min%15 != 0){
    // return { success: false, payload: "Not an interval of 15" }
  // }else{
  const createdApt = await newApt(req.body);
  res.json(createdApt);
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