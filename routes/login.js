// require("dotenv").config();
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
// let db = require("../models");
// let bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/login", (req, res) => {
  res.send("login");
});

module.exports = router;
