var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var ejs = require('ejs');
var mysql = require("mysql");
var app = express();

var PORT = process.env.PORT || 3000;

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "nw_db"
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs"); 

app.use(express.static("public"));


app.get("/", function(req, res) {
 res.render( __dirname + "/views/home.ejs");
});

app.get("/signup", function(req, res) {
  res.render( __dirname + "/views/newusersignup.ejs");
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

<<<<<<< HEAD
app.get("/addjob", function(req, res) {
  res.render(__dirname + "/views/addjob.ejs");
=======

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);

  app.post('/create', function(req, res){
    var newMember = req.body;
    // console.log(newMember);
    var query = "INSERT INTO users (email, password_hash, first_name, last_name, campus, grad_date, link) VALUES (?, ?, ?, ?, ?, ?, ?)"
      connection.query(query, [req.body.email, req.body.password_hash, req.body.first_name, req.body.last_name, req.body.campus, req.body.grad_date, req.body.link], function(err, response){
          if (err) throw err;
      });
    });
>>>>>>> 4ed9860c1eed9ce8461e9612d20bf90ccee645e0
});

app.listen(PORT, function(err){
    if (err) throw err
    console.log("Listening on port: " + PORT);
});

