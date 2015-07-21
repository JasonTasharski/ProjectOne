$(function() {

	console.log("app.js loaded");

	var templateR = _.template($('#reportTemplate').html()); // compile
	var templateE = _.template($('#eventTemplate').html()); // compile

	var renderR = function(reportToRender) {
	  $('#reportTarget').append($(templateR(reportToRender))); // will render reports
	};
	var renderE = function(eventToRender) {
	  $('#eventTarget').append($(templateE(eventToRender))); // will render events
		_.each(eventToRender.reports, function(reportToRender) {
			renderR(reportToRender); // called, calls renderR on each assigned report
		});
	};

	// Hard-coding for fun and profit
	var eventHC1 = {
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
	var eventHC2 = {
		eventLocationP: "Out of place",
		eventDateP: "Out of time",
		reports: [
			{
				reportTitleP: "Third Report",
				reportLocationP: "Kashmir",
				reportDateP: "Last Week",
			},
			{
				reportTitleP: "Fourth Report",
				reportLocationP: "Nagaland",
				reportDateP: "Next Week",
			}
		]
	}

	renderE(eventHC1);
	renderE(eventHC2);

	// $.get('/api/events', function() {
	// 	request("https://www.kimonolabs.com/api/7imxs5lg?kimbypage=1?apikey=P2npdGDmBAziqQB7UEgQR01k1joldB86", 
	// 		function(err, response, body) {
	// 		  console.log(body);
	// 	});
	// });


});