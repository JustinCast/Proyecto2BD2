const { Client } = require('pg')

async function login(req, res) {
  console.log(req.body.conn)
  try {
    const client = new Client({connectionString: String(req.body.conn)})

    await client.connect()

    const result = await client.query('SELECT * FROM _user')
    console.log(result.rows[0])
    await client.end()
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  login: login
};
