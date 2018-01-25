var express = require('express');
var router = express.Router();
var userController= require('../controllers/user-controller');
/* GET users listing. */
router.post('/', userController.postUser)
router.get('/:userId', userController.getUser)


module.exports = router;
