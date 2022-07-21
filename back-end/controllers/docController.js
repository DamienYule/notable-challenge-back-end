const express = require("express");
const doctors = express.Router();
const {
  fetchAllDocs,
  fetchDoc,
  newDoc,
  updateDoc,
  deleteDoc
} = require("../queries/docQueries");

doctors.get("/", async (req, res) => {
  const {doctor_id, date} = req.query
  const allApts = await fetchAllDocs(doctor_id, date);
  res.json(allApts);  
});

doctors.get("/:id", async (req, res) => {
  const { id } = req.params;
  const apt = await fetchDoc(id);
  res.json(apt);
});

doctors.post("/", async (req, res) => {
  const createdApt = await newDoc(req.body);
  res.json(createdApt);
});

doctors.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedApt = await updateDoc(id, req.body);
  res.json(updatedApt);
});

doctors.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedApt = await deleteDoc(id)
  res.json(deletedApt)
});

module.exports = doctors;