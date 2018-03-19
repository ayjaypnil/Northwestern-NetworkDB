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

app.get("/addjob", function(req, res) {
  console.log("at addjob.ejs");
  res.render(__dirname + "/views/addjob.ejs");
});

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

  app.post('/add', function(req, res){

    var new_job = (req.body);
    
    var html = "";

    html += "<div class='col s6 m6'>"
    html += "<div class='card blue-grey darken-1'>"
    html += "<div class='card-content purple darken-4 white-text'>"
    html += "<span class='card-title'>" + new_job.job_title+"</span>"
    html += "<p>"+ new_job.job_desc+"</p></div>"
    html += "<div class='card-action grey darken-2'>"
    html += "<a href="+ new_job.job_URL+" target='_blank'>Click here for more information!</a>"
    html += "</div></div></div>"
    
    res.send(html);


    var query = "INSERT INTO jobs (job_title, job_desc, job_URL) VALUES (?, ?, ?)"
                  connection.query(query, [new_job.job_title, new_job.job_desc, new_job.job_URL], function(err, response){
                      if (err) throw err;
                  })
    //console.log(new_job);
  });
});


app.listen(PORT, function(err){
    if (err) throw err
    console.log("Listening on port: " + PORT);
});