const express = require('express');
const router = express.Router();
const Handbook = require('../models/mariadb').Handbook;
const sequelize = require('../models/mariadb').sequelize;

router.get('/', function(req, res, next) {
  Handbook.findAll()
    .then((handbooks) => {
      res.json(handbooks);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.get('/:id', function(req, res, next) {
  let handbookId  = req.params.id;

  Handbook.findByPk(handbookId)
    .then(function(handbook) {
      res.json(handbook);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.post('/',async (req,res,next) => {
  let body = req.body;

  Handbook.create({
    category: body.category,
    title: body.title,
    body: body.body,
    erdat: sequelize.fn('NOW'),
    aedat: sequelize.fn('NOW'),
  })
    .then(result => {
      console.log("success");
    })
    .catch(err => {
      console.log("fail");
    })
});

router.put('/:id',async (req,res,next) => {
  let body = req.body;
  let handbookId  = req.params.id;

  Handbook.update({
    category: body.category,
    title: body.title,
    body: body.body,
    aedat: sequelize.fn('NOW'),
  },{
    where: { id: handbookId }
  })
    .then(result => {
      console.log("success");
    })
    .catch(err => {
      console.log("fail");
    })
});

router.delete('/:id',async (req,res,next) => {
  let handbookId  = req.params.id

  Handbook.destroy({
    where: { id: handbookId }
  })
    .then(result => {
      console.log("success");
    })
    .catch(err => {
      console.log("fail");
    })
});

module.exports = router;
