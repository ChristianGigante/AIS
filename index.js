const port = 8080;
const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
//Import the mongoose module
const mongoose = require('mongoose');
const item = require('./myController');
const path = require('path');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.all('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


// Configuring the database
const dbConfig = 'mongodb://127.0.0.1:27017/test';

mongoose.Promise = global.Promise;
console.log("Connecting to the database..,");

mongoose.connect(dbConfig, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }
).then(() => {
  console.log("Successfully connected to the database..,");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

//adding new Item
app.post('/item/create', function (req, res) {
  item.create(req, res);
});

//retrieve all Items in DB
app.get('/item/retrieve/all', function (req, res) {
  item.findAll(req, res);
})

///item/retrieve/:id - GET
app.get('/item/retrieve/:id', function (req, res) {
  let id = req.params.id;
  item.findOne(req, res, id);
})

///item/retrieve/:id - GET
app.get('/item/retrieveMany/:name', function (req, res) {
  let name = req.params.name;
  item.findMany(req, res, name);
})

//update an item
//item/update - POST
app.put('/item/update/:id', function (req, res) {
  let id = req.params.id;
  item.update(req, res, id);
})

//remove an item
//item/delete - DELETE
app.delete('/item/delete/:id', function (req, res) {
  let id = req.params.id;
  item.delete(req, res, id);
})

// listen for requests
app.listen(port, () => {
  console.log("Server is listening on port " + port);
});