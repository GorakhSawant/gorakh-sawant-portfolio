const mongoose = require('mongoose');
const Project = require('../models/Project');
require('dotenv').config();

const initialProjects = [
  {
    name: "Cafe-Mania",
    category: "E-COMMERCE",
    description: "A full-featured cafe site with user authentication, product catalog, cart functionality, and order processing.",
    technologies: ["React", "Next.js", "TailwindCSS", "Firebase"],
    github: "https://github.com/GorakhSawant/Cafe-Mania",
    order: 1
  },
  // ... add other projects
];

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    await Project.deleteMany({}); // Clear existing projects
    await Project.insertMany(initialProjects);
    console.log('Database seeded!');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error seeding database:', err);
    process.exit(1);
  }); 