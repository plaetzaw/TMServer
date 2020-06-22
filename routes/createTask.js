// require("dotenv").config();
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
let db = require("../models");
// const jwt = require("jsonwebtoken");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/createTask", (req, res) => {
  res.send("createTask");
});

router.post("/createTask", (req, res) => {
  let user = req.body.id;
  let taskTitle = req.body.taskTitle;
  let taskDescription = req.body.taskDescription;

  let task = db.tasks.build({
    userId: user,
    taskTitle: taskTitle,
    taskDescription: taskDescription,
  });
  task
    .save()
    .then(() => {
      console.log("Saving task to database");
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
