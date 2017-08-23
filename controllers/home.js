let Robot = require('../models/robot');

let HomeController = {
  index: (req, res) => {
      let context = {robots: Robot.all()};
      res.render('index', context);
  }
};

module.exports = HomeController;
