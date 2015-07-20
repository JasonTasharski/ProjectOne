var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Event = require('./models/event');

mongoose.connect("mongodb://localhost/events");

app.listen(process.env.PORT || 3000, function () {
  console.log('server started on localhost:3000');
});