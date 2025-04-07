# Portfolio Website Setup Guide

This is a full-stack portfolio website built with React, Node.js, MongoDB, and TailwindCSS. The application consists of a React frontend and a Node.js/Express backend with MongoDB for data storage.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB Community Edition](https://www.mongodb.com/try/download/community)
- npm (comes with Node.js)

## Installation Steps

### 1. MongoDB Setup
1. Download and install MongoDB Community Server from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
2. During installation:
   - Choose "Complete" installation type
   - Install MongoDB Compass (the GUI tool) if prompted
3. After installation:
   - Press Win + R
   - Type `services.msc` and press Enter
   - Find "MongoDB" in the services list
   - Make sure it's running (if not, right-click and select "Start")

### 2. Project Setup

1. Clone the repository:
```bash
git clone https://github.com/GorakhSawant/gorakh-sawant-portfolio.git
cd gorakh-sawant
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd backend
npm install
```

4. Create a `.env` file in the backend directory with the following content:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-app-password
PORT=5001
MONGODB_URI=mongodb://localhost:27017/portfolio
```

## Running the Application

### 1. Start MongoDB
- Ensure MongoDB service is running (check in services.msc)
- MongoDB should be running on the default port 27017

### 2. Seed the Database
```bash
cd backend
node scripts/seedProjects.js
```
This will populate the database with initial projects and tech stack data.

### 3. Start the Backend Server
In the backend directory:
```bash
node server.js
```
The backend server will start on port 5001.

### 4. Start the Frontend Application
Open a new terminal, navigate to the project root directory:
```bash
npm start
```
The frontend will start on port 3000 and should open automatically in your default browser.

## Verifying the Setup

1. Frontend should be accessible at: http://localhost:3000
2. Backend API should be accessible at: http://localhost:5001
3. MongoDB should be running on: mongodb://localhost:27017

## Features

- Dynamic Projects Page with MongoDB integration
- Contact Form with email functionality
- Tech Stack showcase
- Responsive design with TailwindCSS
- Smooth animations with Framer Motion
- Blog integration

## Troubleshooting

1. If you see "Failed to fetch" error on the Projects page:
   - Ensure MongoDB is installed and running
   - Check if the backend server is running on port 5001
   - Verify MongoDB connection string in .env file

2. If contact form doesn't work:
   - Verify EMAIL_USER and EMAIL_PASS in .env file
   - Ensure you're using an app-specific password for Gmail

3. If MongoDB fails to connect:
   - Check if MongoDB service is running in services.msc
   - Verify the MongoDB connection string
   - Try restarting the MongoDB service

## Project Structure

```
portfolio/
├── src/                  # Frontend source files
│   ├── components/       # React components
│   ├── pages/           # Page components
│   └── App.js           # Main App component
├── backend/             # Backend server
│   ├── models/          # MongoDB models
│   ├── scripts/         # Database scripts
│   └── server.js        # Express server
└── public/             # Static files
```

## Additional Notes

- The project uses MongoDB for storing projects and tech stack information
- Email functionality is handled through nodemailer with Gmail SMTP
- Frontend is built with React and uses modern features like hooks and context
- Styling is done with TailwindCSS for responsive design
- Animations are implemented using Framer Motion


## License

This project is licensed under gorakh sawant.