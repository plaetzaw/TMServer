const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../models");
// require("dotenv").config();
// const jwt = require("jsonwebtoken");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/userTaskFeed", (req, res) => {
  db.users
    .findOne({
      where: {
        id: req.user.id,
      },
      include: [
        {
          model: db.tasks,
        },
      ],
    })
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
