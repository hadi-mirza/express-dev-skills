function index(req, res, next) {
    res.render('index', { title: `Hadi's Skills` });
  }

  module.exports = {
      index,
  }