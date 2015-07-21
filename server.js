var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    request = require('request'),
    Event = require('./models/event');

app.use(express.static(__dirname + '/public'));

mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL || 
  'mongodb://localhost/test'); // identifies database; NEVER IN REQUEST; can be anything and still RESTful


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/view/index.html');
});

app.get('/api/events', function (req, res) {
  Event.find(function(err, alltheevents){
    res.json(alltheevents);
  }); // create events, create reports, event.find();
});



app.listen(process.env.PORT || 3000, function () {
  console.log('server started on localhost:3000');
});