const importList = require("../models/skill.js");

// display all skills

function index(req, res, next) {
  const {
    params: { id: itemId },
  } = req;
  res.render("skills.ejs", { skillNames: importList.skills, id: itemId });
}

// display a single skill

function show(req, res, next) {
  const {
    params: { id: itemId },
  } = req;
  res.render("single-skill", { skillNames: importList.skills, id: itemId });
}

// new page when "Add to skills" is clicked

function addNew(req,res,next) {
  res.render('new-skill.ejs')
}

// function ran when submit button is clicked when adding new skill

function create(req,res,next) {
  let add = {name: req.body.value, id: Math.floor(Math.random() * 100) + importList.skills.length}
  importList.skills.push(add)
  res.render("skills.ejs", { skillNames: importList.skills});
}

// remove item from list

function deleteSkill(req,res,next) {
  importList.deleteOne(req.params.id);
  res.redirect('/skills');
}

// update list item

function updateSkill(req,res,next) {
  importList.updateOne(req.params.id, req.body.value);
  res.redirect('/skills');
}

module.exports = {
  index,
  show,
  create,
  addNew,
  delete: deleteSkill,
  update: updateSkill,
};
