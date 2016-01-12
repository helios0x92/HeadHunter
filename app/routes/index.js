'use strict'

var express = require('express');
var router = express.Router();
var indexCtrl = require("../controllers/indexController");

/* GET home page. */
router.get('/', indexCtrl.serveIndex);
router.get('/api/whoami', indexCtrl.whoami);

module.exports = router;
