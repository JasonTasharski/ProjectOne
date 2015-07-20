var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  date: Object,
  location: String
  // state: String,
  // reports: [{
  // 	type: Schema.types.ObjectId,
  // 	ref: 'Report'
  // }]
});

var Event = mongoose.model('Event', EventSchema);

module.exports = Event;