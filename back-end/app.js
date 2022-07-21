const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

const aptsController = require("./controllers/aptsController")
const docController = require("./controllers/docController")
// ROUTES
app.use("/appointments", aptsController)
app.use("/doctors", docController)

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("*", (req, res) => {
  res.status(404).send('Page not Found')
});

module.exports = app;
