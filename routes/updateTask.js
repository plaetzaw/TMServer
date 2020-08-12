const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
let db = require("../models");

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/updateTask", (req, res) => {
  let id = req.body.id;
  let taskname = req.body.taskname;
  let taskdescription = req.body.taskdescription;
  let taskcompleted = req.body.taskcompleted;
  let assignedto = req.body.assignedto;
  let assignedby = req.body.assignedby;

  console.log(id);

  db.tasks.findOne({
    where: {
      id: id,
    },
  });

  let updatedTask = db.tasks.build({
    id: id,
    taskname: taskname,
    taskdescription: taskdescription,
    taskcompleted: taskcompleted,
    assignedto: assignedto,
    assignedby: assignedby,
  });

  updatedTask
    .save()
    .then(() => {
      console.log("Updating task in the datatbase");
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
