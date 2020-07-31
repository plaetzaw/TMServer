const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
let db = require("../models");

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/deleteTask", (req, res) => {
  let id = req.body.id;

  db.tasks
    .destroy({
      where: {
        id: id,
      },
    })
    .then(() => {
      res.status(200).json({ message: "Task Deleted!" });
    })
    .catch((err) => console.error(err));
});

module.exports = router;
