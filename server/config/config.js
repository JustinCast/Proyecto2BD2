var promise = require("bluebird");

var options = {
  // Initialization Options
  promiseLib: promise,
  encrypt: true
};

const cn = {
  host: 'postgres',
  port: 5432,
  database: 'p2db2',
  user: 'JustinCast',
  password: 'python.1524'
};


var pgp = require("pg-promise")(options);
/*const connectionString =
  "postgres://JustinCast@jc-postgresql:python.1524@jc-postgresql.postgres.database.azure.com:5432/p2db2?ssl=true";*/
const db = pgp(cn);

module.exports = db;
