import Config from "../config.json";

var express = require('express'),
	app = express(),
	PORT = Config.PORT,
	HOST = Config.BASE_URL;

bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/conabioRoutes')
routes(app);

app.listen(PORT, HOST);
console.log(`API on http://${HOST}:${PORT}`);