// Backend API URL based on environment
const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://gorakh-sawant.onrender.com'  // Render backend URL
  : 'http://localhost:10000';             // Local development URL

// Debug logging
console.log('Current environment:', process.env.NODE_ENV);
console.log('Using API URL:', API_URL);
console.log('Backend endpoint check:', `${API_URL}/api/projects`);

console.log('Current environment:', process.env.NODE_ENV);
console.log('Using API URL:', API_URL);

export default API_URL;
