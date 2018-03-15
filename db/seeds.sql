

-- IGNORE BELOW!!

-- // app.use(function(req, res, next) {
-- //   res.header("Access-Control-Allow-Origin", "*");
-- //   res.header(
-- //     "Access-Control-Allow-Headers",
-- //     "Origin, X-Requested-With, Content-Type, Accept"
-- //   );
-- //   next();
-- // });

-- // var connection = mysql.createConnection({
-- //   host: "localhost",
-- //   port: 3306,

-- //   // Your username
-- //   user: "root",

-- //   // Your password
-- //   password: "",
-- //   database: "nwusers_db"
-- // });

-- // connection.connect(function(err) {
-- //   if (err) throw err;
-- //   console.log("connected as id " + connection.threadId + "\n");
-- //   connection.query("SELECT * FROM users_info", function(err, rows) {
-- //     if (err) throw err;

-- //     console.log("Data received from Db:\n");
-- //     console.log(rows);
-- //   });
-- // });