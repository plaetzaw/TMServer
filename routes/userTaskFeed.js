const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../models");

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/userTaskFeed", (req, res) => {
  console.log("executing userTaskFeed route");
  console.log(req.body);
  console.log(req.body.assignedto);
  let assignedto = req.body.assignedto;
  console.log(assignedto);

  db.tasks
    .findAll({
      where: {
        assignedto: assignedto,
      },
    })
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
