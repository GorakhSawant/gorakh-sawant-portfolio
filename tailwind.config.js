// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your file paths
  ],
  theme: {
    extend: {
      backdropBlur: {
        lg: '10px', // This enables backdrop blur for lg
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        'tech-mono': ['"Share Tech Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
