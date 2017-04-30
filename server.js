// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var path       = require('path');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port


//connected to MongoDB Atlast hosted free db
var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:bombay@cluster0-shard-00-00-inw4q.mongodb.net:27017,cluster0-shard-00-01-inw4q.mongodb.net:27017,cluster0-shard-00-02-inw4q.mongodb.net:27017/nodedb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'); // connect to our database

//models
var Offer       = require('./server/models/offer');
var Vendor      = require('./server/models/vendor');
var Location      = require('./server/models/location');

//routes
var offers_router    = require('./server/routes/offers');
var vendors_router   = require('./server/routes/vendors');
var locations_router   = require('./server/routes/locations');


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    //enable CORS
    //TODO only for api routes
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // do logging
    console.log('Request to API made...');
    next(); // make sure we go to the next routes and don't stop here
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
/*
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
*/

//server the mobile front-end
app.use(express.static(path.join(__dirname, 'www')))


// more routes for our API will happen here
//

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router); //TODO - use this route for UI --  remove /api
app.use('/api', offers_router);
app.use('/api', vendors_router);
app.use('/api', locations_router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);