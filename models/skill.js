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

module.exports = {
  skills,
  getEach,
};
