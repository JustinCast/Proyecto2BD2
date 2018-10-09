const { Client } = require("pg");
var client;
var localStorage;
async function login(req, res) {
	try {
		loadLocalStorage();
		client = new Client({ connectionString: String(req.body.conn) });
		localStorage.setItem("connString", String(req.body.conn));
		await client.connect();

		/*const result = await client.query('SELECT * FROM _user')
    console.log(result.rows[0])
    await client.end()*/
		res.status(200).json({ conn: String(req.body.conn) });
	} catch (error) {
		console.log(error);
	}
}

function loadLocalStorage() {
	if (typeof localStorage === "undefined" || localStorage === null) {
		var LocalStorage = require("node-localstorage").LocalStorage;
		localStorage = new LocalStorage("./scratch");
	}
}

async function getSchemas(req, res) {
	try {
		loadLocalStorage();
		client = new Client({ connectionString: localStorage.getItem("connString") });
		await client.connect();

		let result = await client.query("SELECT * FROM get_schemas()");
		res.status(200).json(result.rows);
	} catch (error) {
		console.log(error);
	}
}

async function getTablesPrivileges(req, res) {
	try {
		loadLocalStorage();
		client = new Client({ connectionString: localStorage.getItem("connString") });
		await client.connect();
		let query = {
			text: "SELECT * from db_privileges($1, $2)",
			values: [req.params.usr, req.params.schema]
		};
		let result = await client.query(query);
		res.status(200).json(result.rows);
	} catch (error) {
		console.log(error);
	}
}

async function checkIfProcsExists(req, res) {
	try {
		loadLocalStorage();
		client = new Client({ connectionString: localStorage.getItem("connString") });
		await client.connect();
		let query = `CREATE OR REPLACE FUNCTION db_privileges(login_user VARCHAR(15), schema VARCHAR(15))
    RETURNS TABLE(t_name VARCHAR, privilege VARCHAR)
  AS $$
    BEGIN
      RETURN QUERY SELECT CAST(privileges.table_name AS VARCHAR) as t_name,
                          CAST(privileges.privilege_type AS VARCHAR) AS privilege
      FROM   information_schema.table_privileges AS privileges
      WHERE grantee = login_user AND privileges.table_schema = schema;
    END
  $$ language 'plpgsql';`;
		client.query(query);
		query = `CREATE OR REPLACE FUNCTION table_privileges(t_name VARCHAR(15))
  RETURNS TABLE(_user VARCHAR, p VARCHAR)
AS $$
  BEGIN
    RETURN QUERY SELECT CAST(grantee AS VARCHAR) as _user, CAST(privilege_type AS VARCHAR) as p
    FROM information_schema.role_table_grants
    WHERE table_name=t_name;
  END
$$ language 'plpgsql';`;
		client.query(query);
		query = `CREATE OR REPLACE FUNCTION columns_privileges(t_name VARCHAR(15))
  RETURNS TABLE(_Column VARCHAR, _User VARCHAR, Privilege VARCHAR)
AS $$
  BEGIN
    RETURN QUERY SELECT CAST(column_name AS VARCHAR) AS _Column, CAST(grantee AS VARCHAR) AS _User, CAST(privilege_type AS VARCHAR) AS Privilege
    FROM information_schema.role_column_grants
    WHERE table_name=t_name;
  END;
$$ language 'plpgsql';`;
    client.query(query);
    query = `CREATE OR REPLACE FUNCTION get_schemas()
    RETURNS TABLE(name VARCHAR)
  AS $$
    BEGIN
      RETURN QUERY SELECT CAST(schema_name AS VARCHAR) AS name
      FROM information_schema.schemata;
    END;
  $$ language 'plpgsql';`
  client.query(query);
	} catch (error) {
		console.log(error);
	}
}

async function getColumnsPrivileges(req, res) {
	try {
		loadLocalStorage();
		client = new Client({ connectionString: localStorage.getItem("connString") });
		await client.connect();
		let query = {
			text: "SELECT * FROM columns_privileges($1)",
			values: [req.params.table_name]
		};
		let result = await client.query(query);
		res.status(200).json(result.rows);
	} catch (error) {
		console.log(error);
	}
}

//Se obtiene la conección actual y se ejecuta el query
async function executeQuery(req, res) {
	try {
		client = new Client({ connectionString: req.body.connString});
		await client.connect();

		let result = await client.query(String(req.body.information));
		console.log(result)
		if(result[1] !== undefined)
			res.status(200).json(result[1]);
		else {
			res.status(200).json(result);			
		}
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	login: login,
	getSchemas: getSchemas,
	getTablesPrivileges: getTablesPrivileges,
	getColumnsPrivileges: getColumnsPrivileges,
  executeQuery: executeQuery,
  checkIfProcsExists: checkIfProcsExists
};
