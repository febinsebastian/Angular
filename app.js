var express = require('express'),
	app = express(),
	open = require('open'),
    port = 3001;

app.use(express.static(__dirname + '/'));


app.listen(port, function () {
    console.log('Running '+'on port '+port);
    open('http://localhost:'+port+'/#!/home', function (err) {
		if (err) throw err;

		console.log(err);
    });
});