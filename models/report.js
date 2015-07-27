var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReportSchema = new Schema({
  dateFiled: String, // WILL BE OBJECT; string for testing purposes
  locationFiled: String, 
  newsSource: String,
  title: String,
  sourceUrl: String,
  sampleText: String
});

ReportSchema.methods.redundant = function (sourceUrl, callback) {
  console.log("#1: Entered redundancy-check");
  var thisReport = this;
  Report.findOne({sourceUrl: sourceUrl}, function (err, foundUrl) {
  	console.log("#2: Checking redundancy for: " + thisReport.title);
    if (foundUrl !== null) {
      console.log('#3: Already exists.');
      callback(true);
    } else {
      console.log("#3: Doesn't exist yet.");
      callback(null);
      //newReport.save();
    } 
  })
  console.log("#4 Exiting redundancy-check")
};

var Report = mongoose.model('Report', ReportSchema);

module.exports = Report;