var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

router.use(bodyParser.json());
router.use(cookieParser());

/* RPC entrance. */
router.get('/', function(req, res) {
  res.send({ title: 'Express' });
});

module.exports = router;
