// app/routes.js
var Job = require('./models/job');

module.exports = function(app) {
	// simple one-page app
	app.get('/', function(req, res) {
		res.render('index.html', {
			// user : req.user
		});
	});

	app.get('/api/jobs', function(req, res) {
		Job.find(function(err, jobs) {
			if (err) {
				res.send(err);
			}
			else {
				res.json(jobs);
			}
		});
	});

	app.post('/api/jobs', function(req, res) {
		Job.create({
			description : req.body.description
		}, function(err, event) {
			if (err) {
				res.send(err);
			}
			else {
				res.send(200);
			}
		});
	});
};
