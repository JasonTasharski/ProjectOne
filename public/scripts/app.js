$(function() {

	console.log("app.js loaded");

	var templateR = _.template($('#reportTemplate').html()); // compile
	var templateE = _.template($('#eventTemplate').html()); // compile

	var renderR = function(reportToRender) {
	  console.log("Rendering report...");
	  $('#reportTarget').append($(templateR(reportToRender))); // will render reports
	  console.log("Report rendered.");
	};
	var renderE = function(eventToRender) {
	  console.log("Rendering EVENT...");
	  $('#eventTarget').append($(templateE(eventToRender))); // will render events
		_.each(eventToRender.reports, function(reportToRender) {
			renderR(reportToRender); // called, calls renderR on each assigned report
		});
		console.log("EVENT rendered!");
	};

	// Hard-coding for fun and profit
	var eventHC = {
		iAmA: "Hard-coded event",
		eventLocationP: "Out of place",
		eventDateP: "Out of time",
		reports: [
			{
				iAmA: "Hard-coded report #1",
				reportTitleP: "First Report",
				reportLocationP: "Jharkhand",
				reportDateP: "Yesterday",
			},
			{
				iAmA: "Hard-coded report #2",
				reportTitleP: "Second Report",
				reportLocationP: "Chhatisgarh",
				reportDateP: "Tomorrow",
			}
		]
	}

	console.log(eventHC.iAmA + " exists!");
	console.log(eventHC.reports[0].iAmA + " exists!");
	console.log(eventHC.reports[1].iAmA + " exists!");
	renderE(eventHC); //

	// $.get('/api/events', function() {
	// 	request("https://www.kimonolabs.com/api/7imxs5lg?kimbypage=1?apikey=P2npdGDmBAziqQB7UEgQR01k1joldB86", 
	// 		function(err, response, body) {
	// 		  console.log(body);
	// 	});
	// });


});