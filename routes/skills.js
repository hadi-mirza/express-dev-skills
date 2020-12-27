var express = require('express');
var router = express.Router();
let skillCtrl = require('../controllers/skills.js')

/* GET users listing. */
router.get('/', skillCtrl.index);
router.get('/:id', skillCtrl.item);
router.post('/', skillCtrl.create)
// router.post('/', listCtrl.update)

module.exports = router;
