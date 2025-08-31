const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://gorakh-sawant-portfolio.onrender.com'
  : 'http://localhost:10000';

export default API_URL;
