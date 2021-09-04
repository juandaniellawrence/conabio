var express = require ('express'),
	app = express(),
	PORT = 3333,
	HOST = '0.0.0.0';

bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/conabioRoutes')
routes(app);

app.listen(PORT, HOST);
console.log(`API on http://${HOST}:${PORT}`);