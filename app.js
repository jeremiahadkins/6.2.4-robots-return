const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./router');
let mongo = require('./db');


// call express function to begin express app
const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));


// passing app to router file
routes(app);

// set port listener and log
// what does this do? 
// if (require.main === 'module') {
  // app.listen(4020, (req, res) => {
  //   console.log('app is running on port 4020');
  // });
// }


// Connect to Mongo on start
mongo.connect('mongodb://localhost:27017/robotdb', () => {
  app.listen(4020);
});

