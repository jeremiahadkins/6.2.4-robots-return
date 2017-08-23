var Robot = require('../models/robot');
// let db = require('../db');

var RobotController = {
  detail: function (req, res) {
    let robotId = req.params.id;
    console.log(robotId);
    res.render('detail', {robot: Robot.findOne(robotId)});
  }
};

module.exports = RobotController;
