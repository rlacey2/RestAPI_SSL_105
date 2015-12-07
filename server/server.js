// http://thejackalofjavascript.com/architecting-a-restful-node-js-app/

// HTTPS
// http://www.hacksparrow.com/express-js-https.html

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var fs = require('fs');  // for certs

var https = require('https'); 

// start the server with ssl
 
 
var privateKey   = fs.readFileSync('.\\ssl\\test-key.pem');
var certificate  = fs.readFileSync('.\\ssl\\test-cert.pem');

var credentials = {key: privateKey, cert: certificate};

 
var app = express();

 
 
//var app = require('express').createServer(options);
//var app = express.createServer(options);

app.use(logger('dev'));
app.use(bodyParser.json());

app.use(
			"/", //the URL throught which you want to access to you static content
			express.static(__dirname + '/_ngClient')  //where your static content is located in your filesystem
				); 

console.log(__dirname + '/_ngClient');

app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
		//res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
}); 

// Auth Middleware - This will check if the token is valid
// Only the requests that start with /api/v1/* will be checked for the token.
// Any URL's that do not follow the below pattern should be avoided unless you 
// are sure that authentication is not needed

// specific check to allow an owner get something specific to them
//app.all('/api/v1/owner/:id', [require('./middlewares/validateOwnerRequest')]);

//app.all('/api/v1/owner/*', [require('./middlewares/validateRequest')]);
app.all('/api/v1/admin/*', [require('./middlewares/validateRequest').validateRequest]);
app.all('/api/v1/*', [require('./middlewares/validateRequest').validateRequest]);

app.use('/', require('./routes')); // will load/use index.js by default

// If no route is matched by now, it must be a 404
app.use(function(req, res, next) {
    var err = new Error('Route Not Found, are you using the correct http verb / is it defined?');
    err.status = 404;
    next(err);
});

/*
// Start the server  unsecure
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});
*/

var server = https.createServer(credentials, app);
var port = 3443;
console.log("listening on port: " + port);
server.listen(3443);