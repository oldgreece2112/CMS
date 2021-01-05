var express = require("express");
var passport = require("passport");
var User = require("../models/user.model");
var router = express.Router();

router.get("/register", (req, res) => {
    res.render("user/register");
});

module.exports = router;