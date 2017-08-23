var Robot = require('../models/robot');

var HomeController = {
  index: (req, res) => {
    Robot.all(function(err, results){
      res.render('index', {robots: results});
    });
  }
};

module.exports = HomeController;
