let skills = [
  { name: "HTML5", id: "1" },
  { name: "CSS3", id: "2" },
  { name: "JavaScript", id: "3" },
  { name: "Node JS", id: "4" },
  { name: "Express JS", id: "5" },
];

function getEach() {
  products.forEach(function (n) {
      n.name;
  });
}

function deleteOne(id) {
  // Find the index based on the id of the object
  const idx = skills.findIndex(skills => skills.id === parseInt(id));
  skills.splice(idx, 1);
}

module.exports = {
  skills,
  getEach,
  deleteOne,
};
