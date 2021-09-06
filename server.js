const HOST = process.env.HOSTNAME || 'localhost'
const PORT = process.env.PORT || 3333

console.log(process.env.BASE_URL);

var express = require('express'),
	app = express();

bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/conabioRoutes')
routes(app);

app.listen(PORT, HOST);
console.log(`API on http://${HOST}:${PORT}`);