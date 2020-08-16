var express = require('express');
var router = express.Router();

var middle= require("../controllers/index")

/* GET home page. */
router.get('/', middle.showHello, middle.showName);
router.post('/data', middle.showUser)

module.exports = router;
