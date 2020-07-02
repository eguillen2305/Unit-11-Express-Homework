//START OF SERVER.JS
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const app = express();
const PORT = process.env.PORT || 3036;

app.use(express.json());





app.listen(PORT, function () {
    console.log(`SERVER IS RUNNING ON PORT: ${PORT}`);
})