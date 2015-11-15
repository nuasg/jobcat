// app/routes.js

module.exports = function(app) {
	// simple one-page app
	app.get('/', function(req, res) {
		res.render('index.html', {
			// user : req.user
		});
	});
};
