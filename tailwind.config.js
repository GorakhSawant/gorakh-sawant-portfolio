// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your file paths
  ],
  theme: {
    extend: {
      backdropBlur: {
        lg: '10px', // This enables backdrop blur for lg
      },
    },
  },
  plugins: [],
};
