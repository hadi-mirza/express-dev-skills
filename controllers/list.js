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

  res.render("single-item", { names: importList.products, id: itemId });

  // const {id} = params
  // params = '5' // immutable
  // importList = [1,2,3,4,5]
  // console.log(req);
}

module.exports = {
  index,
  item,
};
