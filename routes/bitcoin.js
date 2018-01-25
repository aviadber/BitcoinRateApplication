var express = require('express');
var router = express.Router();
var bitcoinController = require('../controllers/bitcoin-controller')
router.post('/', bitcoinController);

module.exports = router;
