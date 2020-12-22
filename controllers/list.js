const importList = require("../models/list.js");

function index(req, res, next) {
  res.render("list.ejs", { importList });
}

function item(req, res, next) {
  const {
    params: { id: itemId },
  } = req;
  // const {id} = params
  // params = '5' // immutable
  // importList = [1,2,3,4,5]
  // console.log(req);
  res.render("single-item", { names: importList.products, id: itemId });
}

module.exports = {
  index,
  item,
};
