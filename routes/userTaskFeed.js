const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../models");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/userTaskFeed", (req, res) => {
  let assignedto = req.body.assignedto;

  console.log("executing userTaskFeed route");
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
