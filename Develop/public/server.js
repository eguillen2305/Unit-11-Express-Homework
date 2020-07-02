//dependencies
const express = require('express');
const htmlRoute = require('./routes/htmlRoute');
const apiRoute = require('./routes/apiRoute');
//const app used to setup Express
const app = express();
const PORT = process.env.PORT || 8080;

//app.use statments used to parse the data. JSON, URLENCODED, STATIC.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

require('./routes/apiRoute')(app);
require('./routes/htmlRoute')(app);

//APP.LISTEN to start server and console log when port is accessed.
app.listen(PORT, () => {
	console.log('SERVER IS RUNNING ON PORT:' + PORT);
});

//Sucessfully console logging server is running on port 8080
