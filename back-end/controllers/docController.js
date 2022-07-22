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
  const {doctor_id} = req.query
  const allApts = await fetchAllDocs(doctor_id);
  res.json(allApts);  
});

doctors.get("/:id", async (req, res) => {
  const { id } = req.params;
  const apt = await fetchDoc(id);
  res.json(apt);
});

doctors.post("/", async (req, res) => {
  const createdDoc = await newDoc(req.body);
  res.json(createdDoc);
});

doctors.put("/", async (req, res) => {
  const updatedDoc = await updateDoc(req.body);
  res.json(updatedDoc);
});

doctors.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedDoc = await deleteDoc(id)
  res.json(deletedDoc)
});

module.exports = doctors;