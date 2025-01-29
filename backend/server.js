const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');

const app = express();

app.use(cors());
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

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #0F172A;
          color: #FFFFFF;
          margin: 0;
          padding: 40px;
        }

        .content {
          max-width: 600px;
          margin: 0 auto;
          background-color: #1E293B;
          padding: 40px;
          border-radius: 16px;
          border: 1px solid #3B82F6;
        }

        .header {
          text-align: center;
          margin-bottom: 40px;
        }

        .title {
          color: #3B82F6;
          font-size: 28px;
          font-weight: bold;
          margin: 0;
          margin-bottom: 10px;
        }

        .section {
          background-color: #0F172A;
          padding: 20px;
          margin-bottom: 20px;
          border-radius: 8px;
        }

        .label {
          color: #3B82F6;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          font-weight: bold;
        }

        .text {
          color: #FFFFFF;
          font-size: 16px;
          line-height: 1.6;
          margin: 0;
        }

        .message-section {
          background-color: #0F172A;
          padding: 20px;
          margin-top: 20px;
          border-radius: 8px;
          border-left: 4px solid #3B82F6;
        }

        .footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #3B82F6;
          color: #3B82F6;
          text-align: center;
          font-size: 14px;
        }

        .highlight {
          color: #3B82F6;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="content">
        <div class="header">
          <h1 class="title">New Message From Portfolio</h1>
        </div>

        <div class="section">
          <div class="label">From</div>
          <div class="text">${name}</div>
        </div>

        <div class="section">
          <div class="label">Email</div>
          <div class="text">${email}</div>
        </div>

        <div class="message-section">
          <div class="label">Message</div>
          <div class="text">${message.replace(/\n/g, '<br>')}</div>
        </div>

        <div class="footer">
          GORAKH SAWANT
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: {
      name: "Portfolio Contact",
      address: process.env.EMAIL_USER
    },
    to: process.env.EMAIL_USER,
    subject: `New Message from ${name}`,
    text: `
From: ${name}
Email: ${email}

Message:
${message}
    `,
    html: htmlContent,
    replyTo: email
  };

  try {
    console.log('Attempting to send email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Detailed error sending email:', error);
    res.status(500).json({ 
      message: 'Failed to send email.',
      error: error.message
    });
  }
});

// Project Routes
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error: error.message });
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

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 