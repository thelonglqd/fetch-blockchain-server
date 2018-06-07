var express = require('express');
var router = express.Router();
var fs = require('fs');
var _ = require('lodash');

/* GET home page. */
router.post('/', function(req, res, next) {
  const { username, password } = req.body;
  fs.readFile('db.json', (err, data) => {
    if (err) {
      res.status(500);
      return res.send(err);
    } else {
      data = JSON.parse(data.toString());
      console.log(data.filter(user => user.username === username && user.password === password))
      if (data.filter(user => user.username === username && user.password === password).length === 1) {
        res.status(200);
        res.send(data.filter(user => user.username === username && user.password === password));
      }
    }
    
  });
});

module.exports = router;
