import React, { useState } from 'react';
import { FaCity, FaBell, FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`header ${darkMode ? 'dark' : ''}`}>
      <div className="header-left">
        <div className="logo">
          <FaCity className="logo-icon" />
          <span className="logo-text">SmartCity</span>
        </div>
      </div>
      
      <div className="header-right">
        <button className="notification-btn">
          <FaBell className="notification-icon" />
          <span className="notification-badge">3</span>
        </button>
        
        <button 
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <FaSun className="dark-mode-icon" />
          ) : (
            <FaMoon className="dark-mode-icon" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;