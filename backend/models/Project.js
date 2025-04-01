const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  technologies: [{
    type: String,
    required: true
  }],
  github: {
    type: String,
    required: true
  },
  live: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Project', projectSchema); 