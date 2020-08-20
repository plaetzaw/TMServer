const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../models");

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/allUsers", (req, res) => {
  db.users
    .findAll({ attributes: ["lastname"] })
    // .findAll({ attributes: ["firstname", "lastname"] })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
