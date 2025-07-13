import React, { useEffect, useState } from 'react';
import '../styles/ThemeToggle.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className="neo-toggle-container">
      <input
        className="neo-toggle-input"
        id="neo-toggle"
        type="checkbox"
        checked={!isDark}
        onChange={toggleTheme}
      />
      <label className="neo-toggle" htmlFor="neo-toggle">
        <div className="neo-track">
          <div className="neo-background-layer"></div>
          <div className="neo-grid-layer"></div>
          <div className="neo-track-highlight"></div>
        </div>

        <div className="neo-thumb">
          <div className="neo-thumb-ring"></div>
        </div>

        <div className="neo-gesture-area"></div>
        <div className="neo-interaction-feedback">
          <div className="neo-ripple"></div>
          <div className="neo-progress-arc"></div>
        </div>

        <div className="neo-status">
          <div className="neo-status-indicator">
            <div className="neo-status-dot"></div>
            <div className="neo-status-text"></div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
