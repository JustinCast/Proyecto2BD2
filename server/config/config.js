var promise = require("bluebird");

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require("pg-promise")(options);
const connectionString =
  "postgres://JustinCast@jc-postgresql:python.1524@jc-postgresql.postgres.database.azure.com:5432/postgres?ssl=true";
const db = pgp(connectionString);

module.exports = db;
