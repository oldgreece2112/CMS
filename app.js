if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var flash = require("connect-flash");
var passportLocal = require("passport-local");
var session = require("express-session");
var app = express();

var PORT = provess.env.PORT || 8000;

app.listen(PORt, process.env.IP, function() {
    console.log("The server is currently listening on port " + PORt);
});