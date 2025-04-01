const mongoose = require('mongoose');
const TechStack = require('../models/TechStack');
require('dotenv').config();

const initialTechStack = [
  {
    name: "React",
    category: "Frontend",
    icon: "SiReact",
    link: "https://reactjs.org",
    proficiency: 90,
    order: 1
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: "SiJavascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    proficiency: 85,
    order: 2
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "SiNodedotjs",
    link: "https://nodejs.org",
    proficiency: 80,
    order: 3
  },
  {
    name: "MongoDB",
    category: "Backend",
    icon: "SiMongodb",
    link: "https://www.mongodb.com",
    proficiency: 75,
    order: 4
  },
  {
    name: "TailwindCSS",
    category: "Frontend",
    icon: "SiTailwindcss",
    link: "https://tailwindcss.com",
    proficiency: 85,
    order: 5
  }
];

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    try {
      console.log('Connected to MongoDB, starting seed...');
      console.log('Initial data:', initialTechStack);
      
      await TechStack.deleteMany({}); 
      console.log('Cleared existing tech stack data');
      
      const insertedTech = await TechStack.insertMany(initialTechStack);
      console.log('Inserted tech stack data:', insertedTech);
      
      // Verify the data
      const verifyData = await TechStack.find();
      console.log('Verification - Data in database:', verifyData);
      
      console.log('Tech Stack seeded successfully!');
      console.log(`${insertedTech.length} technologies inserted.`);
      process.exit(0);
    } catch (error) {
      console.error('Error seeding database:', error);
      process.exit(1);
    }
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }); 