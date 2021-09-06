const HOST = process.env.HOSTNAME || 'localhost'
const PORT = process.env.PORT || 3333

var express = require('express'),
	app = express();

bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/conabioRoutes')
routes(app);

app.listen(PORT, HOST);
console.log(`API on http://${HOST}:${PORT}`);