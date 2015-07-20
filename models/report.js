var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReportSchema = new Schema({
  dateFiled: Object,
  locationFiled: String, 
  newsSource: String
});

var Report = mongoose.model('Report', ReportSchema);

module.exports = Report;