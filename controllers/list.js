let importList = require('../models/list.js')

function index(req, res, next) {
  res.render('list.ejs', {importList});
};


// This is the part I can't figure out. Why can't I display the forEach values of 'name'? I'm pretty sure my function in models/list.js is ok

function item(req,res,next) {
    // res.send(req.params.id)
    // res.send(importList.getEach())    .......... This is the forEach function, I can't call it because I messed up somewhere
    res.render('single-item', {importList})  // Using render works but I cant call importList.products within the .ejs either
}

//

module.exports = {
    index,
    item,
}