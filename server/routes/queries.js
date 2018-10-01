const { Client } = require('pg')
var client
async function login(req, res) {
  try {
    client = new Client({connectionString: String(req.body.conn)})

    await client.connect()

    /*const result = await client.query('SELECT * FROM _user')
    console.log(result.rows[0])
    await client.end()*/
    res.status(200).json({logged: true})
  } catch (error) {
    console.log(error);
  }
}

async function getSchemas(req, res) {
  try {
    await client.connect();

    let result = await client.query('SELECT * FROM getSchemas()')
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  login: login,
  getSchemas: getSchemas
};
