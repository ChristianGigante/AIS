const mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  quantity: {
    type: Number,
    min: 1,
    required: true
  },
  priority: {
    type: Number,
    min: 1,
    max: 3,
    required: true
  }
}, {
    collection: "items"
  });

// Compile model from schema
var Item = mongoose.model('items', itemSchema);

module.exports = { Item }