var express = require('express');
var router = express.Router();
let skillCtrl = require('../controllers/skills.js')

/* GET users listing. */
router.get('/', skillCtrl.index);
router.get('/new', skillCtrl.addNew)
router.post('/', skillCtrl.create)

// Not sure if this is the right mount
router.delete('/:id', skillCtrl.delete)
router.put('/:id', skillCtrl.update)

router.get('/:id', skillCtrl.show);

module.exports = router;
