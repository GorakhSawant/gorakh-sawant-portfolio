#!/bin/bash

echo "Starting build process..."

# Navigate to project root
cd /opt/render/project/src/

# Install and build frontend
echo "Building frontend..."
cd frontend
npm install
npm run build

# Set up backend
echo "Setting up backend..."
cd ../backend
mkdir -p public

# Copy frontend build to backend public
echo "Copying frontend build to backend..."
cp -r ../frontend/build/* public/

# Install backend dependencies
echo "Installing backend dependencies..."
npm install

echo "Build process complete!"
