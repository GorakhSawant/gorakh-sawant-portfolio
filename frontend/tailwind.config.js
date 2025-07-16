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
        md: '12px',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        'tech-mono': ['"Share Tech Mono"', 'monospace'],
      },
      keyframes: {
        shine: {
          to: {
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        'shine': 'shine 2s infinite',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow': '0 0 10px rgba(59, 130, 246, 0.5)',
      },
      textShadow: {
        'glow': '0 0 10px rgba(59, 130, 246, 0.5)',
      },
    },
  },
  plugins: [],
};
