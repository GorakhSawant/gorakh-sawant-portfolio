# Portfolio Website

A full-stack portfolio website built with React, Node.js, MongoDB, and TailwindCSS. Features a modern UI, project showcase, contact form, and blog integration.

## Project Structure

```
portfolio/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── api/      # API service layer
│   │   ├── components/
│   │   ├── pages/
│   │   └── hooks/    # Custom React hooks
│   └── public/
├── backend/          # Node.js/Express backend
│   ├── models/      # MongoDB models
│   ├── scripts/     # Database scripts
│   └── server.js    # Express server
└── README.md
```

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (v4.4 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/GorakhSawant/portfolio.git
cd portfolio
```

2. Install all dependencies (frontend and backend):
```bash
npm run install:all
```

3. Set up environment variables:
   
   Create a `.env` file in the backend directory:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-app-password
PORT=5001
MONGODB_URI=mongodb://localhost:27017/portfolio
```

## Running the Application

You have several options to run the application:

1. **Run everything with one command** (recommended for normal use):
```bash
npm start
```
This will:
- Run the database seed script automatically
- Start the backend server
- Start the frontend development server

2. **Development mode** with auto-reload on changes:
```bash
npm run dev
```
This will:
- Start the frontend with hot reloading
- Start the backend with nodemon (auto-reloads on changes)

3. **Run only the seed script** (to populate/reset the database):
```bash
npm run seed
```

4. **Run frontend and backend separately**:
```bash
# Terminal 1 - Frontend
npm run start:frontend

# Terminal 2 - Backend
npm run start:backend
```

## Available Scripts

- `npm start` - Runs the complete application (frontend + backend + database seeding)
- `npm run dev` - Runs the application in development mode with auto-reload
- `npm run seed` - Runs only the database seed script
- `npm run start:frontend` - Runs only the frontend
- `npm run start:backend` - Runs only the backend (includes seeding)
- `npm run install:all` - Installs dependencies for both frontend and backend
- `npm run build` - Builds the frontend for production

## Accessing the Application

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5001](http://localhost:5001)
- MongoDB: mongodb://localhost:27017/portfolio

## Features

- 🎨 Modern, responsive UI with TailwindCSS
- 🚀 Full-stack JavaScript/Node.js
- 📊 MongoDB for data persistence
- 📧 Contact form with email integration
- 📱 Mobile-first design
- ⚡ Fast page loads and smooth transitions
- 🔄 Real-time content updates
- 📝 Blog integration

## Troubleshooting

1. **MongoDB Connection Issues**
   - Ensure MongoDB is installed and running
   - Check MongoDB service status in services.msc
   - Verify connection string in .env file

2. **Email Not Working**
   - Verify EMAIL_USER and EMAIL_PASS in .env
   - For Gmail, use App Password instead of regular password
   - Check spam folder for test emails

3. **Port Conflicts**
   - Frontend default port: 3000
   - Backend default port: 5001
   - Change in .env if needed



## License

