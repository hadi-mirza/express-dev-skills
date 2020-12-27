const importList = require("../models/skill.js");

function index(req, res, next) {
  const {
    params: { id: itemId },
  } = req;
  res.render("skills.ejs", { skillNames: importList.skills, id: itemId });
}

function show(req, res, next) {
  const {
    params: { id: itemId },
  } = req;
  res.render("single-skill", { skillNames: importList.skills, id: itemId });
}

function addNew(req,res,next) {
  res.render('new-skill.ejs')
}

function create(req,res,next) {
  let add = {name: req.body.value, id: Math.floor(Math.random() * 100) + importList.skills.length}
  importList.skills.push(add)
  res.render("skills.ejs", { skillNames: importList.skills});
}

module.exports = {
  index,
  show,
  create,
  addNew,
};
