const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../models");
// require("dotenv").config();
// const jwt = require("jsonwebtoken");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/taskFeed", (req, res) => {
  db.tasks
    .findAll()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
