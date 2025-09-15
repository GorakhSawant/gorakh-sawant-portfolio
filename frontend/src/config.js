// Backend API URL based on environment
const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://gorakh-sawant.onrender.com'  // Render backend URL
  : 'http://localhost:10000';             // Local development URL

// Debug logging
console.log('Frontend Configuration:');
console.log('- Environment:', process.env.NODE_ENV);
console.log('- API URL:', API_URL);
console.log('- Projects Endpoint:', `${API_URL}/api/projects`);
console.log('- Tech Stack Endpoint:', `${API_URL}/api/tech-stack`);

export default API_URL;
