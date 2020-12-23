const importList = require("../models/list.js");

function index(req, res, next) {
  const {
    params: { id: itemId },
  } = req;
  res.render("list.ejs", { names: importList.products, id: itemId });
}

function item(req, res, next) {
  const {
    params: { id: itemId },
  } = req;
  res.render("single-name", { names: importList.products, id: itemId });

  // const {id} = params
  // params = '5' // immutable
  // importList = [1,2,3,4,5]
  // console.log(req);
}

function post(req,res,next) {
  let add = {name: req.body.value, id: importList.products[0].id*Math.floor(Math.random() * 1000) + 10}
  importList.products.push(add)
  res.render("list.ejs", { names: importList.products});
}

// function update(req,res,next) {
//   let updatedName = req.body.newValue
//   console.log(updatedName)
// }

module.exports = {
  index,
  item,
  post,
  // update,
};
