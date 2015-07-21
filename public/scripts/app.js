$(function() {

	console.log("app.js loaded");

	var templateR = _.template($('#reportTemplate').html()); // compile
	var templateE = _.template($('#eventTemplate').html()); // compile

	var renderR = function(reportToRender, eventToRender) { // will render reports
		console.log("Rendering report...");
		reportTargetP = eventToRender.reportTargetP;
	  console.log("Targeting " + "'" + reportTargetP + "'");
	  // $(eventTemplate).append($(templateR(reportTemplate)));
	  // $(reportTargetP).append($(templateR(reportToRender)));
	  $('#testingWithChhun').append($(templateR(reportToRender)));
	  console.log("Report rendered.");
	};
	var renderE = function(eventToRender) {
		console.log("Rendering EVENT...");
	  $('#eventTarget').append($(templateE(eventToRender))); // will render events
		_.each(eventToRender.reports, function(reportToRender) {
			renderR(reportToRender, eventToRender); // called, calls renderR on each assigned report
		});
		console.log("EVENT rendered.");
	};

	// Hard-coding for fun and profit
	var eventArr = [];
	var ReportP = function(reportTitleP, reportLocationP, reportDateP){
		this.reportTitleP = reportTitleP;
		this.reportLocationP = reportLocationP;
		this.reportDateP = reportDateP;
		console.log("Report created: "+ this.reportTitleP);
	}
	var EventP = function(eventLocationP, eventDateP){
		this.eventLocationP = eventLocationP;
		this.eventDateP = eventDateP;
		this.reports = [];
		this.reportTargetP = "#" + eventArr.length;
		eventArr.push(this);
		console.log("EVENT created.");
	}
	console.log("Creating events and reports...");
	var r1 = new ReportP("First Report", "Jharkhand", "Yesterday");
	var r2 = new ReportP("Second Report", "Chhatisgarh", "Tomorrow");
	var r3 = new ReportP("Third Report", "Kashmir", "Last Week");
	var r4 = new ReportP("Fourth Report", "Nagaland", "Next Week");
	var eventHC1 = new EventP("Out of place", "Out of time");
	var eventHC2 = new EventP("Somewhere", "Sometime");
	eventHC1.reports.push(r1, r2);
	eventHC2.reports.push(r3, r4);
	console.log("EVENTs filled.");
	renderE(eventHC1);
	renderE(eventHC2);
	console.log("EVENTs rendered.");
	// $.get('/api/events', function() {
	// 	request("https://www.kimonolabs.com/api/7imxs5lg?kimbypage=1?apikey=P2npdGDmBAziqQB7UEgQR01k1joldB86", 
	// 		function(err, response, body) {
	// 		  console.log(body);
	// 	});
	// });


});