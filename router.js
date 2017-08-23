let express = require('express');
let HomeController = require('./controllers/home');
let RobotController = require('./controllers/robot');

module.exports = ((app) => {
  const homeRouter = express.Router();
  const robotRouter = express.Router();

  homeRouter.get('/', HomeController.index);
  
  robotRouter.get('/:id/', RobotController.detail);

  app.use('/', homeRouter);
  app.use('/robot', robotRouter);
});
