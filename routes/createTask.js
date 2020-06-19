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

router.post(
  "/createTask",
  (req,
  (res) => {
    let user = req.user.id;
    let taskTitle = req.body.taskTitle;
    let taskDescription = req.body.taskDescription;
    let createdAt = req.body.createdAt;

    let task = db.tasks.build({
      userId: user,
      taskTitle: taskTitle,
      taskDescription: taskDescription,
      createdAt: createdAt,
    });
  })
);

module.exports = router;
