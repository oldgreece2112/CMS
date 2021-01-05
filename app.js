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

var User = require("./models/user.model");
var UserRoute = require("./routes/User.route");
var PORT = process.env.PORT || 8000;

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to database");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new passportLocal(User.authenticate()));

app.use("/user", UserRoute);

app.listen(PORT, process.env.IP, function() {
    console.log("The server is currently listening on port " + PORT);
});