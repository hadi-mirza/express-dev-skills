var express = require('express');
var router = express.Router();
let skillCtrl = require('../controllers/skills.js')

/* GET users listing. */
router.get('/', skillCtrl.index);
router.get('/new', skillCtrl.addNew)
router.post('/', skillCtrl.create)

// Not sure if this is the right mount
router.post('/:id', skillCtrl.remove)

router.get('/:id', skillCtrl.show);

module.exports = router;
