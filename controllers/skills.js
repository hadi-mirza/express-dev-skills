const importList = require("../models/skill.js");

function index(req, res, next) {
  const {
    params: { id: itemId },
  } = req;
  res.render("skills.ejs", { skillNames: importList.skills, id: itemId });
}

function item(req, res, next) {
  const {
    params: { id: itemId },
  } = req;
  res.render("single-skill", { skillNames: importList.skills, id: itemId });

  // const {id} = params
  // params = '5' // immutable
  // importList = [1,2,3,4,5]
  // console.log(req);
}

function create(req,res,next) {
  let add = {name: req.body.value, id: importList.skills[0].id*Math.floor(Math.random() * 1000) + 10}
  importList.skills.push(add)
  res.render("skills.ejs", { skillNames: importList.skills});
}

// function update(req,res,next) {
//   let updatedName = req.body.newValue
//   console.log(updatedName)
// }

module.exports = {
  index,
  item,
  create,
  // update,
};
