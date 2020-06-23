// require("dotenv").config();
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../models");
// const jwt = require("jsonwebtoken");

router.use(bodyParser.urlencoded({ extended: false }));

// router.get("/taskFeed", (req, res) => {
//   res.send("taskFeed");
// });

router.get("/taskFeed", (req, res) => {
  db.tasks
    .findAll({
      include: [
        {
          model: db.user,
          required: true,
          attributes: ["taskTitle", "taskDescription"],
        },
      ],
    })
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
