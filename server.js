var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    request = require('request'),
    Event = require('./models/event');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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

// $.get('https://www.kimonolabs.com/api/7imxs5lg?kimbypage=1?apikey=P2npdGDmBAziqQB7UEgQR01k1joldB86&callback=',
//    function(data) {
//  console.log(data);
// });

app.listen(process.env.PORT || 3000, function () {
  console.log('server started on localhost:3000');
});