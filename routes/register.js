// require("dotenv").config();
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
// let db = require("../models");
// let bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/register", (req, res) => {
  res.send("register");
});

module.exports = router;
