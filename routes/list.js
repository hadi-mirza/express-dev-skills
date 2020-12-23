var express = require('express');
var router = express.Router();
let listCtrl = require('../controllers/list.js')

/* GET users listing. */
router.get('/', listCtrl.index);
router.get('/:id', listCtrl.item);
router.post('/', listCtrl.post)
// router.post('/', listCtrl.update)

module.exports = router;
