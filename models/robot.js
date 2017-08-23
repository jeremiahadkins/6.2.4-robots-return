// let Robot = {
//   data: [

//   ],
//   all: function(){
//     return this.data;
//   },
//   findOne: function(id){
//     return this.data.find(function(robot){
//       return robot.id == id;
//     });
//   }
// };

// module.exports = Robot;
var Robot = {
  all: function(callback){
    // get the database connection
    let db = require('../db').db;

    db.collection('robots')
      // .find({cuisine: {$in: ["Thai", "Vietnamese"]}})
      // .sort({"grades.0.grade": 1, "name": 1})
      .find()
      // .limit(10)
      .toArray(callback);
  }
};

module.exports = Robot;
