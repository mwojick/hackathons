const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

//initialize express app
const app = express();

//log requests to console
app.use(logger("dev"));

//parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//setup default path
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome"
  })
);

module.exports = app;
