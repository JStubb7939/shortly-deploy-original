var mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost/shortlydb');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'something bad happened: '));

db.once('open', function() {
  console.log('Mongodb connection is open!');
});

module.exports = db;
