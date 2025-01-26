import React from 'react';
import './StarryBackground.css'; // Import the CSS for the starry effect

const StarryBackground = () => {
  return (
    <div className="starry-background">
      {/* Create multiple stars */}
      {Array.from({ length: 100 }).map((_, index) => (
        <div key={index} className="star"></div>
      ))}
      {/* Create planets with rings */}
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="planet">
          <div className="ring"></div>
        </div>
      ))}
    </div>
  );
};

export default StarryBackground; 