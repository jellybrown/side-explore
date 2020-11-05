var express = require('express');
var router = express.Router();
var Handbook = require('../models').Handbook;

/* GET users listing. */
router.get('/', function(req, res, next) {
  Handbook.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

module.exports = router;
