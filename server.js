var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var ejs = require('ejs');
var mysql = require("mysql");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs"); 

app.get("/", function(req, res) {
 res.render( __dirname + "/assets/views/home.ejs", { title: "Northwestern Bootcamp Network Home Page!" }
  );
});

app.get("/home", function(req, res) {
  res.render( __dirname + "/views/home.ejs");
});

app.get("/events", function(req, res) {
  res.render( __dirname + "/views/events.ejs", { events: "Northwestern Bootcamp Network Page!" }
  );
});

app.get("/network", function(req, res) {
  res.render( __dirname + "/views/network.ejs", { network: "Northwestern Bootcamp Network Events Page!" }
  );
});

app.listen(PORT, function(err){
    if (err) throw err
    console.log("Listening on port: " + PORT);
});