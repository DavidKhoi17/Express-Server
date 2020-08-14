var mongoose = require('mongoose')
var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var cors = require('cors')

//setup express server
var app = express()
app.use(cors())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(logger('dev'))

//setup routes
var router = express.Router();
 
router.get('/testing', (req, res) => {
  res.send('<h1>Testing is working</h1>')
})

router.get('/home', (req, res) => {
    res.send('<h1>This is my Home Page</h1>')
})

router.get('/about', (req, res) => {
    res.send('<h1>Description about the page</h1>')
})

//use server to serve up routes
app.use('/api', router);
 
// launch our backend into a port
const apiPort = 3001;
app.listen(apiPort, () => console.log('Listening on port '+apiPort));
