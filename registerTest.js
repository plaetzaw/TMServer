const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
let db = require("../models");
let SALT = 69;
// const jwt = require("jsonwebtoken");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/register", (req, res) => {
  res.send("register");
});

router.post("/register", (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let password = req.body.password;
  db.user
    .findOne({
      where: {
        email: email,
      },
    })
    .then((user) => {
      if (user) {
        console.log("email already exists");
        res.status(500).json({ message: "Email is already in use" });
      } else {
        db.user
          .findOne({
            where: {
              email: email,
            },
          })
          .then(() => {
            bcrypt.hash(password, SALT).then((hash) => {
              console.log("HASHing Password...");
              let user = db.user.build({
                firstName: firstName,
                lastName: lastName,
                password: hash,
                email: email,
              });

              user
                .save()
                .then(() =>
                  res.status(200).json({ message: "New User Created" })
                )
                .catch((err) => console.error(err));
            });
          });
      }
    });
});

module.exports = router;
