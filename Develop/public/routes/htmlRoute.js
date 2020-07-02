const path = require('path');

// Routing
module.exports = (app) => {
	// app.get to get notes on notes.html
	app.get('/notes/', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/notes.html'));
	});
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});
};
