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
app.use(express.static("public"));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "",
//   database: "nwusers_db"
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId + "\n");
//   connection.query("SELECT * FROM users_info", function(err, rows) {
//     if (err) throw err;

//     console.log("Data received from Db:\n");
//     console.log(rows);
//   });
// });

app.get("/", function(req, res) {
 res.render( __dirname + "/views/index.ejs");
});

app.get("/home", function(req, res) {
  res.render( __dirname + "/views/home.ejs");
});

app.get("/profile", function(req, res) {
  res.render( __dirname + "/views/profile.ejs");
});

app.get("/events", function(req, res) {
  res.render( __dirname + "/views/events.ejs");
});

app.get("/network", function(req, res) {
  res.render( __dirname + "/views/network.ejs");
});

app.get("/jobs", function(req, res) {
  res.render(__dirname + "/views/jobs.ejs");
});

app.listen(PORT, function(err){
    if (err) throw err
    console.log("Listening on port: " + PORT);
});