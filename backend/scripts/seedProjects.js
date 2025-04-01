const mongoose = require('mongoose');
const Project = require('../models/Project');
require('dotenv').config();

const initialProjects = [
  {
    name: "Portfolio Website",
    category: "WEB DEVELOPMENT",
    description: "Modern portfolio website built with React, TailwindCSS, and Node.js, featuring dynamic content management and responsive design.",
    technologies: ["React", "TailwindCSS", "Node.js", "MongoDB"],
    github: "https://github.com/GorakhSawant/portfolio",
    featured: true,
    order: 1
  },
  {
    name: "Task Management System",
    category: "WEB APPLICATION",
    description: "A comprehensive task management system with user authentication, real-time updates, and team collaboration features.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/GorakhSawant/task-manager",
    featured: true,
    order: 2
  },
  {
    name: "E-commerce Platform",
    category: "E-COMMERCE",
    description: "Full-featured e-commerce platform with product management, shopping cart, and secure payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/GorakhSawant/ecommerce",
    featured: false,
    order: 3
  }
];

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    try {
      // Clear existing projects
      await Project.deleteMany({});
      console.log('Cleared existing projects');

      // Insert new projects
      const result = await Project.insertMany(initialProjects);
      console.log('Successfully seeded projects:', result);
      process.exit(0);
    } catch (error) {
      console.error('Error seeding projects:', error);
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });