var promise = require("bluebird");

var options = {
  // Initialization Options
  promiseLib: promise
};

const cn = {
  host: "jc-postgresql.postgres.database.azure.com",
  port: 5432,
  database: "p2db2",
  user: "JustinCast",
  password: "python.1524"
};

var pgp = require("pg-promise")(options);
/*const connectionString =
  "postgres://JustinCast@jc-postgresql:python.1524@jc-postgresql.postgres.database.azure.com:5432/p2db2?ssl=true";*/
//var db = pgp(cn);

function login(req, res) {
  cn.host = req.body.server;
  cn.port = req.body.port;
  cn.database = req.body.database;
  cn.user = req.body.user;
  cn.password = req.body.password;
  db = pgp(cn);

}

module.exports = {
  login: login
};
