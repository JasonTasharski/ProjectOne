var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Event = require('./models/event');

mongoose.connect("mongodb://localhost/api/events");

// var report1 = new db.Report({dateFiled:"June 25, 2015", locationFiled:"Rajnandgaon", newsSource:"The Hindu"});
// report1.save();
// var report2 = new db.Report({dateFiled:"April 13, 2015", locationFiled:"Raipur", newsSource:"The Hindu"});
// report2.save();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/view/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('server started on localhost:3000');
});