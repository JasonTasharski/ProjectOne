var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReportSchema = new Schema({
  dateFiled: String, // WILL BE OBJECT; string for testing purposes
  locationFiled: String, 
  newsSource: String
});

var Report = mongoose.model('Report', ReportSchema);

module.exports = Report;