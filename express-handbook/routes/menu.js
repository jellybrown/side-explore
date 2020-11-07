const router = require('express').Router();
const Menu = require('../models/mongodb/menu');

router.get('/', (req, res) => {
  Menu.findAll()
    .then((menus) => {
      if (!menus.length)
        return res.status(404).send({ err: 'Menu not found'});
      res.send(`find successfully: ${menus}`);
    })
    .catch(err => res.status(500).send(err));
});

router.get('/menuid/:menuid', (req, res) => {
  Menu.findOneByMenuid(req.params.menuid)
    .then((menu) => {
      if (!menu)
        return rees.status(404).send({ err: 'Todo not found' });
      res.send(`findOne successfully: ${menu}`);
    })
    .catch(err => res.status(500).send(err));
});

router.post('/', (req, res) => {
  Menu.create(req.body)
    .then(menu => res.send(menu))
    .catch(err => res.status(500).send(err));
});

router.put('/menuid/:menuid', (req, res) => {
  Menu.updateByMenuid(req.params.menuid, req.body)
    .then(menu => res.send(menu))
    .catch(err => res.status(500).send(err));
});

router.delete('/menuid/:menuid', (req, res) => {
  Menu.deleteByMenuid(req.params.menuid)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
