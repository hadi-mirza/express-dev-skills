var express = require('express');
var router = express.Router();
let skillCtrl = require('../controllers/skills.js')

/* GET users listing. */
router.get('/', skillCtrl.index);
router.get('/new', skillCtrl.addNew)
router.post('/', skillCtrl.create)

router.get('/:id', skillCtrl.show);

module.exports = router;
