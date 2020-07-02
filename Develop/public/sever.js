//START OF SERVER.JS
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));






app.listen(PORT, function() {
	console.log(`SERVER IS RUNNING ON PORT: ${PORT}`);
});



