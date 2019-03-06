var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "shimmy123",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("Error connecting " + err.stack);
    return;
  }
  console.log("CONNECTED as ID:--> " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
