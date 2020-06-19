// require("dotenv").config();
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
let db = require("../models");
let bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/login", (req, res) => {
  res.send("login");
});

router.post("/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  db.user
    .findOne({
      where: {
        email: email,
      },
    })
    .then((selectedUser) => {
      if (selectedUser) {
        bcrypt.compare(password, selectedUser.password).then((correct) => {
          if (correct) {
            const id = selectedUser.id;
            const email = selectedUser.email;

            const user = {
              id: id,
              email: email,
            };

            console.log("user has logged in");
            res.status(200).json({ message: "User has logged in" });
          } else {
            console.log("password is invalid");
            res.status(403).json({ message: "Password is invalid" });
          }
        });
      } else {
        console.log("user not found in database");
        res.status(404).json({ message: "No user found" });
      }
    })
    .catch((err) => {
      res.sendStatus(404).json({ message: err });
    });
});

module.exports = router;
