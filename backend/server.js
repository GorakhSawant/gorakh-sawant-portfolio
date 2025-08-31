const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
const TechStack = require('./models/TechStack');

const app = express();

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  origin: '*',  // Allow all origins for now
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// Add this before creating the transporter
console.log('Email User:', process.env.EMAIL_USER);
console.log('Email Pass length:', process.env.EMAIL_PASS?.length);

// Create transporter with more detailed logging
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  debug: true,
  logger: true
});

// Verify transporter configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log('Transporter verification error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

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
  },
  {
    name: "Python",
    category: "Backend",
    icon: "SiPython",
    link: "https://www.python.org",
    proficiency: 85,
    order: 6
  }
];

// Connect to MongoDB and seed data
mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Seed TechStack if empty
    const techStackCount = await TechStack.countDocuments();
    if (techStackCount === 0) {
      try {
        console.log('Seeding tech stack with:', initialTechStack);
        const result = await TechStack.insertMany(initialTechStack);
        console.log('Tech Stack seeded successfully:', result);
      } catch (error) {
        console.error('Error seeding tech stack:', error);
      }
    } else {
      console.log(`Found ${techStackCount} existing tech stack items`);
    }

    // Check if there are any projects
    const projectCount = await Project.countDocuments();
    console.log(`Found ${projectCount} existing projects`);
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);  // Exit if MongoDB connection fails
  });

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const emailContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          background-color: #1E293B;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          padding: 30px;
          background-color: #0F172A;
          border: 2px solid #3B82F6;
          border-radius: 10px;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
          background-color: #1E293B;
          padding: 20px;
          border-radius: 8px;
        }
        .header h1 {
          color: #3B82F6;
          font-size: 28px;
          margin: 0;
        }
        .content {
          padding: 25px;
          background-color: #1E293B;
          border-radius: 8px;
        }
        .content p {
          color: #FFFFFF !important;
          margin: 15px 0;
          font-size: 16px;
          line-height: 1.8;
        }
        .message-box {
          background-color: #1E293B;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #3B82F6;
          margin: 20px 0;
          color: #FFFFFF !important;
        }
        .signature {
          margin-top: 25px;
          padding-top: 15px;
          border-top: 1px solid #3B82F6;
          color: #FFFFFF !important;
          font-size: 16px;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 2px solid #3B82F6;
        }
        .footer p {
          color: #FFFFFF !important;
          margin: 5px 0;
          font-size: 16px;
        }
        .social-links {
          margin-top: 15px;
        }
        .social-links a {
          display: inline-block;
          color: #FFFFFF !important;
          background-color: #1E293B;
          text-decoration: none;
          margin: 0 10px;
          padding: 10px 20px;
          border: 1px solid #3B82F6;
          border-radius: 5px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          background-color: #3B82F6;
          color: #FFFFFF;
        }
        * {
          color: #FFFFFF !important;
        }
        h1 {
          color: #3B82F6 !important;
        }
        .message-label {
          color: #FFFFFF !important;
          font-size: 16px;
          margin-bottom: 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You for Reaching Out!</h1>
        </div>
        <div class="content">
          <p>Dear ${name},</p>
          <p>Thank you for contacting me. I have received your message and will get back to you as soon as possible.</p>
          <p class="message-label">Here's a copy of your message:</p>
          <div class="message-box">
            ${message}
          </div>
          <div class="signature">
            Best regards,<br>
            Gorakh Sawant
          </div>
        </div>
        <div class="footer">
          <p>// GORAKH SAWANT</p>
          <div class="social-links">
            <a href="https://github.com/gorakhsawant">GitHub</a>
            <a href="https://linkedin.com/in/gorakh-sawant">LinkedIn</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    // Send both emails with the same template
    await transporter.sendMail({
      from: {
        name: "Portfolio Contact",
        address: process.env.EMAIL_USER
      },
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      html: emailContent,
      replyTo: email
    });

    // Send auto-response
    await transporter.sendMail({
      from: {
        name: "Gorakh Sawant",
        address: process.env.EMAIL_USER
      },
      to: email,
      subject: "Thank You for Reaching Out!",
      html: emailContent
    });

    res.json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ 
      message: 'Failed to send email.',
      error: error.message
    });
  }
});

// Project Routes with improved error handling
app.get('/api/projects', async (req, res) => {
  try {
    console.log('Fetching projects...');
    const projects = await Project.find().sort({ order: 1 });
    console.log(`Found ${projects.length} projects`);
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ 
      message: 'Error fetching projects', 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined 
    });
  }
});

app.post('/api/projects', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error creating project', error: error.message });
  }
});

app.put('/api/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error updating project', error: error.message });
  }
});

app.delete('/api/projects/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting project', error: error.message });
  }
});

// Get all tech stack items
app.get('/api/tech-stack', async (req, res) => {
  try {
    const techStack = await TechStack.find().sort({ order: 1 });
    res.json(techStack);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tech stack', error: error.message });
  }
});

// Add new tech stack item
app.post('/api/tech-stack', async (req, res) => {
  try {
    const techItem = new TechStack(req.body);
    await techItem.save();
    res.status(201).json(techItem);
  } catch (error) {
    res.status(500).json({ message: 'Error creating tech stack item', error: error.message });
  }p
});

// Update tech stack item
app.put('/api/tech-stack/:id', async (req, res) => {
  try {
    const techItem = await TechStack.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(techItem);
  } catch (error) {
    res.status(500).json({ message: 'Error updating tech stack item', error: error.message });
  }
});

// Delete tech stack item
app.delete('/api/tech-stack/:id', async (req, res) => {
  try {
    await TechStack.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tech stack item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting tech stack item', error: error.message });
  }
});

// Catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Use Render's PORT or fallback to 10000
const PORT = process.env.PORT || 10000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successful MongoDB connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });