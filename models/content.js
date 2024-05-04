const mongoose = require('mongoose');

// Define schema for Movie
const schema = new mongoose.Schema({
  heading: {
    type: String,
    required: true
  },
  content:{
      type:String
  }

});

// Create Movie model from schema
const content = mongoose.model('content', schema);

module.exports = content;
