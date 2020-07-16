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

// Create a new task
router.post("/createTask", (req, res) => {
  let userID = req.body.userID;
  let tasktitle = req.body.tasktitle;
  let taskdescription = req.body.taskdescription;
  let taskcompletion = req.body.taskcompletion;
  let assignedby = req.body.assignedby;

  let task = db.tasks.build({
    userID: userID,
    tasktitle: tasktitle,
    taskdescription: taskdescription,
    taskcompletion: taskcompletion,
    assignedby: assignedby,
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

// Edit an existing task
router.patch("/createTask", (req, res) => {
  let userID = req.body.userID;
  db.users.find({
    where: { userID: userID },
  }).then;
});

module.exports = router;
