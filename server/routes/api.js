const express = require('express');
const router = express.Router();

const queries = require('./queries')

router.post('/login', queries.login);
router.get('/getSchemas', queries.getSchemas);
router.get('/getTablePrivileges/:usr/:schema', queries.getTablesPrivileges);
router.get('/getColumnsPrivileges/:table_name', queries.getColumnsPrivileges);
router.get('/executeQuery',queries.executeQuery);

module.exports = router;