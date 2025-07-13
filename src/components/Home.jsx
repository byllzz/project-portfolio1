import React from 'react';
import '../styles/Home.css';
import image1 from '../assets/image1.jpg';

// Only wrap letters & numbers in hover span
const splitText = (text, className = '') =>
  text.split('').map((char, index) => {
    const isHoverable = /[a-zA-Z0-9]/.test(char);
    return isHoverable ? (
      <span key={index} className={`char-hover ${className}`}>
        {char}
      </span>
    ) : (
      <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
    );
  });

export default function Home() {
  return (
    <section id="home">
      <h1 className="hero-title">
        {splitText('CREA')}
        <img className="hero-img hover-trigger" data-cursor-text="Profile Image!" src={image1} alt="face" />
        {splitText('TIVE')}
        <br />
        <span className="second-line">
          {splitText('UI/UX DESIGNER', 'line-2')}
        </span>
        <br />
        <span className="third-line hero-location">
          <div className="vertical-tag-hero tag-location">based in</div> {splitText('PAKISTAN*', 'line-3')}
        </span>
      </h1>

      <div className="vertical-tag-hero tag-left">Frontend Developer</div>
      <div className="vertical-tag-hero tag-right">Web EXPERIENCE</div>
    </section>
  );
}
