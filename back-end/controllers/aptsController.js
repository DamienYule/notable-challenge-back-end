const express = require("express");
const appointments = express.Router();
const {
  fetchAllApts,
  fetchAllAptsForDoc,
  fetchApt,
  newApt,
  updateApt,
  deleteApt,
} = require("../queries/aptsQueries");

const appointmentsForDoc = async (doctor_id, date) => {
  const allDocApts = await fetchAllAptsForDoc(doctor_id);
  if (date) {
    const filteredOnDate = allDocApts.payload.filter((apt) => {
      return apt.date.toISOString().substring(0, date.length) == date;
    });
    return filteredOnDate;
  } else {
    return allDocApts;
  }
};

appointments.get("/", async (req, res) => {
  const { doctor_id, date } = req.query;
  if (doctor_id) {
    const filteredApt = await appointmentsForDoc(doctor_id, date);
    res.json(filteredApt);
  } else {
    const allApts = await fetchAllApts();
    res.json(allApts);
  }
});

appointments.get("/:id", async (req, res) => {
  const { id } = req.params;
  const apt = await fetchApt(id);
  res.json(apt);
});

appointments.post("/", async (req, res) => {
  const { doctor_id, time, date } = req.body;
  const min = parseInt(time.split(":")[1]);
  const filteredApt = await appointmentsForDoc(doctor_id, date);
  const existingAppts = filteredApt.filter((apt) => {
    return apt.time == time;
  });
  if (min % 15 !== 0) {
    res.json({ success: false, payload: "Not an interval of 15 min" });
  } else if (existingAppts.length > 2) {
    res.json({
      success: false,
      payload: "Too many appointments at this time for this doctor",
    });
  } else {
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
  const deletedApt = await deleteApt(id);
  res.json(deletedApt);
});

module.exports = appointments;
