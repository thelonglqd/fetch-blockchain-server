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
      res.status(200);
      return res.send(data.filter(user => user.id == req.params.id)[0].orders)
    }
  })
});

router.put('/:id/orders', function (req, res, next) {
  console.log('req.body: ', req.body);
  console.log('req.params: ', req.params);
  fs.readFile('db.json', (err, data) => {
    if (err) {
      res.status(500);
      return res.send(err);
    } else {
      data = JSON.parse(data.toString());
      data.forEach(user => {
        if (user.id == req.params.id) {
          user.orders.push({size: parseFloat(req.body.size), bid: parseFloat(req.body.bid) });
        }
      });
      fs.writeFile('db.json', JSON.stringify(data), (err) => {
        if (err) {
          res.status(500);
          return res.send({ errorMessage: 'Internal server error' })
        } else {
          res.status(201);
          return res.send({ message: 'ok' });
        }
      })
    }
  })
});

module.exports = router;
