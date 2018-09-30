const pg = require("pg");

//var pool;
function login(req, res) {
  try {
    const client = new pg.Client({
      connectionString:
        "postgres://JustinCast@jc-postgresql:python.1524@jc-postgresql.postgres.database.azure.com:5432/p2db2?ssl=true"
    });
    client.connect();

    client
      .query("SELECT NOW()")
      .then(res => {
        console.log(res);
        client.end();
      })
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  login: login
};
