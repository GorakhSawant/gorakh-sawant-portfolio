require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('../models/Project');

const checkAndSeedData = async () => {
  try {
    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    console.log('Connected successfully to MongoDB');
    console.log('Database:', mongoose.connection.name);
    console.log('Host:', mongoose.connection.host);
    
    // Check if there are any projects
    const projectCount = await Project.countDocuments();
    console.log('Current project count:', projectCount);
    
    if (projectCount === 0) {
      console.log('No projects found. Seeding initial data...');
      
      // Initial projects data
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
      
      // Insert the projects
      await Project.insertMany(initialProjects);
      console.log('Successfully seeded initial projects');
    } else {
      console.log('Projects already exist in the database');
    }
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

// Run the script
checkAndSeedData();
