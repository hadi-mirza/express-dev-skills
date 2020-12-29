let skills = [
  { name: "HTML5", id: "1" },
  { name: "CSS3", id: "2" },
  { name: "JavaScript", id: "3" },
  { name: "Node JS", id: "4" },
  { name: "Express JS", id: "5" },
];

function deleteOne(id) {
const idx = skills.findIndex(skills => skills.id == id);
skills.splice(idx, 1)
}

function updateOne(id,value) {
  const idx = skills.find(skills => skills.id == id);
  idx.name = value
  }

module.exports = {
  skills,
  deleteOne,
  updateOne,
};
