const express = require('express');
const router = express.Router();

const queries = require('./queries')

router.post('/login', queries.login);

module.exports = router;