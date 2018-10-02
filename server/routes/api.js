const express = require('express');
const router = express.Router();

const queries = require('./queries')

router.post('/login', queries.login);
router.get('/getSchemas', queries.getSchemas);
router.get('/getTablePrivileges', queries.getTablesPrivileges);

module.exports = router;