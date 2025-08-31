const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://gorakh-sawant.onrender.com'
  : 'http://localhost:5001';  // Updated to match backend port

console.log('Current environment:', process.env.NODE_ENV);
console.log('Using API URL:', API_URL);

export default API_URL;
