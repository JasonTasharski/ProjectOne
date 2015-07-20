$(function() {

	console.log("app.js loaded");

	getEvents: function() {
		request("https://www.kimonolabs.com/api/7imxs5lg?kimbypage=1?apikey=P2npdGDmBAziqQB7UEgQR01k1joldB86", 
			function(err, response, body) {
			  console.log(body);
		});
	}


	$.get('/api/events', function() {
		getEvents();
	});


});