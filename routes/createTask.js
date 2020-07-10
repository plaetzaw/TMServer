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
  let taskTitle = req.body.taskTitle;
  let taskDescription = req.body.taskDescription;
  let taskCompleted = req.body.taskCompleted;
  let assignedBy = req.body.assignedBy;
  let assignedTo = req.body.assignedTo;

  let task = db.tasks.build({
    userID: userID,
    taskTitle: taskTitle,
    taskDescription: taskDescription,
    taskCompleted: taskCompleted,
    assignedBy: assignedBy,
    assignedTo: assignedTo,
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
  db.user.find({
    where: { userID: userID },
  }).then;
});

module.exports = router;
