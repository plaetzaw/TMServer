const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
let SALT = 15;
let db = require("../models");

router.use(bodyParser.urlencoded({ extended: false }));

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
        console.log("email already exists"); // MUST INCLUDE A RESPONSE FOR THE SERVER TO REPLY TO THE CLIENT WITH
        // make sure you return a res from the server to kill this process. Console logging does not kill the process
        res.status(500).json({ message: "Email already exists" });
      } else {
        db.user
          .findOne({
            where: {
              email: email,
            },
          })
          .then((user2) => {
            console.log("looking for email...");
            if (user2) {
              console.log("email already exists");
              res.status(500).json({ message: "email already exists" });
              // make sure you return a res from the server to kill this process. Console logging does not kill the process
            } else {
              bcrypt.hash(password, SALT).then((hash) => {
                console.log("hashing password....");
                let user = db.user.build({
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  password: hash,
                });

                user
                  .save()
                  .then(() =>
                    res.status(200).json({ message: "New user created!" })
                  )
                  .catch((err) => console.error(err));
              });
            }
          });
      }
    });
});

module.exports = router;
