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
  let assignedto = req.body.assignedto;
  let taskname = req.body.taskname;
  let taskdescription = req.body.taskdescription;
  let taskcompleted = req.body.taskcompleted;
  let assignedby = req.body.assignedby;

  let task = db.tasks.build({
    assignedto: assignedto,
    taskname: taskname,
    taskdescription: taskdescription,
    taskcompleted: taskcompleted,
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

module.exports = router;
