$(function() {

	console.log("app.js loaded");

	var templateR = _.template($('#reportTemplate').html()); // compile
	var templateE = _.template($('#eventTemplate').html()); // compile

	var renderR = function(reportToRender, eventToRender) { // will render reports
		reportTargetP = eventToRender.reportTargetP;
	  $("#"+reportTargetP).append($(templateR(reportToRender)));
	};
	var renderE = function(eventToRender) {
	  $('#eventTarget').append($(templateE(eventToRender))); // will render events
		_.each(eventToRender.reports, function(reportToRender) {
			renderR(reportToRender, eventToRender); // called, calls renderR on each assigned report
		});
	};

	// Hard-coding for fun and profit
	var eventArr = [];
	var ReportP = function(reportTitleP, reportLocationP, reportDateP){
		this.reportTitleP = reportTitleP;
		this.reportLocationP = reportLocationP;
		this.reportDateP = reportDateP;
	}
	var EventP = function(eventLocationP, eventDateP){
		this.eventLocationP = eventLocationP;
		this.eventDateP = eventDateP;
		this.reports = [];
		this.reportTargetP = JSON.stringify(eventArr.length);
		eventArr.push(this);
	}
	var r1 = new ReportP("First Report", "Jharkhand", "Yesterday");
	var r2 = new ReportP("Second Report", "Chhatisgarh", "Tomorrow");
	var r3 = new ReportP("Third Report", "Kashmir", "Last Week");
	var r4 = new ReportP("Fourth Report", "Nagaland", "Next Week");
	var eventHC1 = new EventP("Out of place", "Out of time");
	var eventHC2 = new EventP("Somewhere", "Sometime");
	eventHC1.reports.push(r1, r2);
	eventHC2.reports.push(r3, r4);
	renderE(eventHC1);
	renderE(eventHC2);


	$.get('/api/events', function(res){ //  get data from database (eventually)
		console.log(res); // THIS gets the data from the API, via server
	})
	$.get('/api/reports', function(res){ //  get data from database (eventually)
		console.log(res); // THIS gets the data from the API, via server
	})
	$.get('/api/users', function(res){ //  get data from database (eventually)
		console.log(res); // THIS gets the data from the API, via server
	})
	$.get('/scrape', function(res){ //  get data from database (eventually)
		console.log(res); // THIS gets the data from the API, via server
	})
	$('#login-form').on("submit", function(event){
		var userData = {
			email: $('#login-user-email').val(),
			password: $('#login-user-password').val()
		};
		$.post('/user/login', function(res){
			console.log(res);
		});
	});

	// $.get('user/current', function(res){
	// 	if (res === null){
	// 		// noone loggee inu
	// 	} else {
	// 		//jemand eingelogt
	// 	}
	// })

});