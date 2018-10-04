const { Client } = require('pg')
var client;
var localStorage;
async function login(req, res) {
  try {
    loadLocalStorage();
    client = new Client({connectionString: String(req.body.conn)})
    localStorage.setItem('connString', String(req.body.conn))
    await client.connect()

    /*const result = await client.query('SELECT * FROM _user')
    console.log(result.rows[0])
    await client.end()*/
    res.status(200).json({conn: String(req.body.conn)})
  } catch (error) {
    console.log(error);
  }
}

function loadLocalStorage() {
  if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
}

async function getSchemas(req, res) {
  try {
    loadLocalStorage();
    client = new Client({connectionString: localStorage.getItem('connString')})
    await client.connect();

    let result = await client.query('SELECT * FROM get_schemas()')
    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
  }
}

async function getTablesPrivileges(req, res) {
  try {
    loadLocalStorage();
    client = new Client({connectionString: localStorage.getItem('connString')})
    await client.connect();
    let query = {
      text: 'SELECT * from db_privileges($1, $2)',
      values: [req.params.usr, req.params.schema]
    } 
    let result = await client.query(query)
    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
  }
}

async function getColumnsPrivileges(req, res) {
  try {
    loadLocalStorage();
    client = new Client({ connectionString: localStorage.getItem('connString')})
    await client.connect();
    let query = {
      text: 'SELECT * FROM columns_privileges($1)',
      values: [req.params.table_name]
    }
    let result = await client.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
  }
}

async function executeQuery(req, res){
  try {
    
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  login: login,
  getSchemas: getSchemas,
  getTablesPrivileges: getTablesPrivileges,
  getColumnsPrivileges: getColumnsPrivileges,
  executeQuery : executeQuery
};
