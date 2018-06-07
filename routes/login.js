var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log('req.body: ', req.body);
  res.send({ test: 'LOGIN API '});
});

module.exports = router;
