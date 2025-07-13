import React, { useState } from 'react';
import '../styles/Navbar.css';
import { GiAstronautHelmet } from 'react-icons/gi';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
    {/* Logo */}
    <div className="navbar-logo hover-trigger" data-cursor-text="Bilal's Portfolio">
      <span className="navbar-title">Portfolio</span>
    </div>

    {/* Desktop Links */}
    <div className="navbar-links">
      <a href="#home">Home</a>
      <a href="#skills">Skills</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </div>

    {/* Ping Me Button */}
    <a href="#contact" className="navbar-btn">
      <GiAstronautHelmet size={20} />
      <span>Ping Me</span>
    </a>
 
    {/* Hamburger Icon */}
    <div className="menu-icon" onClick={toggleMenu}>
      {menuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
    </div>

    {/* Overlay Blur Background */}
    <div className={`overlay-blur ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

    {/* Mobile Menu Box */}
    <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
      <a href="#about" onClick={toggleMenu}>Home</a>
      <a href="#projects" onClick={toggleMenu}>Skills</a>
      <a href="#services" onClick={toggleMenu}>Services</a>
      <a href="#contact" onClick={toggleMenu}>Contact</a>
    </div>
  </nav>
  );
}
