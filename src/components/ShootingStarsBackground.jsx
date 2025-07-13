import React, { useEffect } from "react";
import "../styles/ShootingStarsBackground.css";

const ShootingStarsBackground = () => {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement("div");
      star.className = "shooting-star";

      // Random top position (starting from ~hero section)
      const top = 200 + Math.random() * 300; // 200px to 500px from top
      const left = Math.random() * window.innerWidth;

      star.style.top = `${top}px`;
      star.style.left = `${left}px`;

      document.body.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 2000);
    };

    const interval = setInterval(() => {
      for (let i = 0; i < 2; i++) createStar(); // more stars at once
    }, 800); // Every 800ms

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default ShootingStarsBackground;
