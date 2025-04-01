const mongoose = require('mongoose');

const techStackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  proficiency: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  order: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('TechStack', techStackSchema); 