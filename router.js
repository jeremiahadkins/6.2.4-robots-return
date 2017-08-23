var express = require('express');
var HomeController = require('./controllers/home');
var RobotController = require('./controllers/robot');

module.exports = function(app){
  const homeRouter = express.Router();
  const robotRouter = express.Router();

  homeRouter.get('/', HomeController.index);
  
  robotRouter.get('/:id/', RobotController.detail);

  app.use('/', homeRouter);
  app.use('/robot', robotRouter);
};
