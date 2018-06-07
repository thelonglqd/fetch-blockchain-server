var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/:id/orders', function(req, res, next) {
  fs.readFile('db.json', (err, data) => {
    if (err) {
      res.status(500);
      return res.send(err);
    } else {
      data = JSON.parse(data.toString());
      var orders = data.filter(user => user.id == req.params.id);
      return res.send(data.filter(user => user.id == req.params.id)[0].orders)
    }
  })
});

module.exports = router;
