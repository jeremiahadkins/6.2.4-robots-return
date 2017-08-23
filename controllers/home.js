var Robot = require('../models/robot');

var HomeController = {
  index: (req, res) => {
    // res.render('index', {robots: robot});
    Robot.all(function(err, results){
      console.log('err', err);
      res.render('index', {robots: results});
    });
  }
};

module.exports = HomeController;
