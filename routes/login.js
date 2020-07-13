require("dotenv").config();
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
let db = require("../models");
const jwt = require("jsonwebtoken");

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/login", (req, res) => {
  let email = req.body.email;
  console.log(email);
  let password = req.body.password;
  console.log(password);

  db.user
    .findOne({
      where: {
        email: email,
      },
    })
    .then((persistUser) => {
      if (persistUser) {
        bcrypt
          .compare(password, persistUser.password)
          .then((success) => {
            if (success) {
              let token = jwt.sign(
                {
                  id: persistUser.id,
                  email: persistUser.email,
                },
                process.env.JWT_SECRET,
                {
                  expiresIn: "1h",
                }
              );

              res
                .status(200)
                .json({ message: "Successfully logged in!", token: token });
            }
          })
          .catch((err) => console.error(err));
      } else {
        res
          .status(500)
          .json({ message: "Incorrect credentials, please try again" });
      }
    });
  // .then((selectedUser) => {
  //   if (selectedUser) {
  //     bcrypt.compare(password, selectedUser[0].password).then((correct) => {
  //       if (correct) {
  //         let token = jwt.sign(
  //           {
  //             id: selectedUser[0].id,
  //             email: slectedUser[0].email,
  //           },
  //           process.env.JWT_SECRET,
  //           {
  //             expiresIn: "4h",
  //           }
  //         );

  //         console.log("user has logged in");
  //         res
  //           .status(200)
  //           .json({ message: "User has logged in", token: token });
  //       } else {
  //         console.log("password is invalid");
  //         res.status(403).json({ message: "Password is invalid" });
  //       }
  //     });
  //   } else {
  //     console.log("user not found in database");
  //     res.status(404).json({ message: "No user found" });
  //   }
  // })
  // .catch((err) => {
  //   res.sendStatus(404).json({ message: err });
  // });
});

module.exports = router;
