var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Report = require('./report'); // require the model, since it's in a different file

var EventSchema = new Schema({
  // date: String, // WILL BE OBJECT; string for testing purposes
  // location: String,
  // state: String,
  reports: [Report.schema] // the schema of the model
});

var Event = mongoose.model('Event', EventSchema);

module.exports = Event;