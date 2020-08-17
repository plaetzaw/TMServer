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

  db.tasks
    .findOne({
      where: {
        id: id,
      },
    })
    .then((persistPost) => {
      console.log("Found an existing task, beginning update");
      persistPost.taskname = taskname;
      persistPost.taskdescription = taskdescription;
      persistPost.taskcompleted = taskcompleted;
      persistPost.assignedto = assignedto;
      persistPost.assignedby = assignedby;

      persistPost
        .save()
        .then(() => {
          console.log("Updated task in the database");
          res.sendStatus(200);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.error(err));
});

module.exports = router;
