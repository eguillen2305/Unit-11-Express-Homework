//Dependencies
const fs = require('fs');
const data = require('../db/db.json');
const path = require('path');
// Routing
module.exports = (app) => {
	// API get
	app.get('/api/notes', (request, result) => {
		fs.readFile('./db/db.json', 'utf-8', (err, notes) => {
			if (err) throw err;
			let notesParsed;
			try {
				notesParsed = [].concat(JSON.parse(notes));
			} catch (err) {
				notesParsed = [];
			}
			result.json(notesParsed);
		});
    });
    
    	//APP.POST api notes
	app.post('./api/notes', (request, result) => {
		console.log(data, 'Adding New Note', request.body);
		// Read from the JSON file
		fs.readFile('./db/db.json', 'utf-8', (err, response) => {
			// Convert to JSON
			let allNotes = JSON.parse(response);

			var newestNote = allNotes[allNotes.length - 1].id;
			newestNote = newestNote + 1;
			console.log(newestNote);

			const newNote = { ...req.body, id: latestNote };
			console.log('New Note: ', newNote);
			allNotes.push(newNote);
			// Updates the new note added
			fs.writeFile('./db/db.json', JSON.stringify(allNotes), (err) => {
				if (err) throw err;
				result.json(allNotes);
				console.log('New note has been added: ', allNotes);
			});
		});
	});

	app.delete('/api/notes/:id', (request, result) => {
		let noteId = request.params.id;
		console.log('noteId: ', noteId);

		fs.readFile('./db/db.json', 'utf-8', (err, response) => {
			if (err) throw err;
			const allNotes = JSON.parse(response);
			const newNotes = allNotes.filter((note) => note.id != noteId);
			fs.writeFile('./db/db.json', JSON.stringify(newNotes, null, 2), (err) => {
				if (err) throw err;
				result.json(true);
				console.log('Notes deleted');
			});
		});
	});


};
