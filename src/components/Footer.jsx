import React from 'react'
import '../styles/Footer.css'
import ThemeToggle from './ThemeToggle'


export default function Footer() {
  return (
    <footer className="footer">
      <ThemeToggle  />
    {/* Footer Content */}
     <div className="footer-contact">
      <div class="custom-menu">
  <a class="custom-menu__link" href="#home">Home</a>
  <a class="custom-menu__link" href="#skills">Skills</a>
  <a class="custom-menu__link" href="#services">Services</a>
  <a class="custom-menu__link" href="#contact">Contact</a>
</div>

{/* Social media custom icons */}
<div class="social-links-container">
  <div class="social-icon">
    <button onClick={() => window.open('https://github.com/byllzz', '_blank')}>
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 
        5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77
        a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    </button>
    <span class="tooltip">GitHub</span>
  </div>

  {/* <div class="social-icon">
    <button>
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37c-.84.5-1.78.86-2.77 1.05A4.28 4.28 0 0 0 16 4c-2.37 0-4.3 1.93-4.3 4.3 0 .34.04.67.1.98C7.69 9.12 4.07 7.1 1.64 4.15a4.3 4.3 0 0 0-.58 2.17c0 1.49.76 2.81 1.9 3.58a4.3 4.3 0 0 1-1.94-.53v.05c0 2.08 1.48 3.82 3.44 4.21a4.33 4.33 0 0 1-1.93.07c.54 1.7 2.1 2.94 3.95 2.98A8.63 8.63 0 0 1 2 19.54a12.17 12.17 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.39-.02-.58A8.7 8.7 0 0 0 24 5.1a8.5 8.5 0 0 1-2.54.7z"/>
      </svg>
    </button>
    <span class="tooltip">Twitter</span>
  </div> */}

  <div class="social-icon">
    <button onClick={()=> {window.open('https://www.linkedin.com/in/malik-bilal-91149a36b', '_blank')}}>
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 
        0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 
        1.75-1.75 1.75.785 1.75 1.75-.785 1.75-1.75 1.75zm13.5 10.268h-3v-4.5c0-1.105-.895-2-2-2s-2 .895-2 
        2v4.5h-3v-9h3v1.354c.658-.808 1.714-1.354 2.876-1.354 2.206 0 4 1.794 4 4v5z"/>
      </svg>
    </button>
    <span class="tooltip">LinkedIn</span>
  </div>

  {/* <div class="social-icon">
    <button>
      <svg viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 2.881c-7.239 0-13.119 5.88-13.119 13.119s5.88 13.119 
        13.119 13.119c7.239 0 13.119-5.88 13.119-13.119s-5.88-13.119-13.119-13.119zM16 24c-4.411 0-8-3.589-8-8s3.589-8 
        8-8 8 3.589 8 8-3.589 8-8 8zM24.293 7.707c-.391-.391-1.023-.391-1.414 0s-.391 1.023 
        0 1.414l.003.003c.391.391 1.023.391 1.414 0s.391-1.023 0-1.414l-.003-.003z"/>
      </svg>
    </button>
    <span class="tooltip">Instagram</span>
  </div> */}

  <div class="social-icon">
    <button>
      <svg viewBox="0 0 512 512" fill="currentColor">
        <path d="M256 0C114.836 0 0 114.836 0 256c0 97.203 54.975 181.91 
        135.031 226.488-1.859-19.363-3.543-49.063.734-70.125 3.879-18.859 25.117-119.969 
        25.117-119.969s-6.398-12.793-6.398-31.688c0-29.688 17.199-51.875 38.625-51.875 
        18.234 0 27.016 13.699 27.016 30.125 0 18.32-11.672 45.754-17.719 
        71.094-5.082 21.367 10.773 38.773 31.902 38.773 38.25 0 67.625-40.32 
        67.625-98.477 0-51.488-37.031-87.605-89.852-87.605-61.293 0-97.41 
        45.973-97.41 93.531 0 18.469 7.145 38.242 16.078 48.961 1.77 2.113 
        2.02 3.949 1.488 6.051-.625 2.543-2.063 8.285-2.652 10.605-.832 
        3.25-3.359 4.418-6.203 3.199-17.348-7.066-28.188-29.207-28.188-62.867 
        0-47.992 40.48-105.516 120.648-105.516 64.492 0 106.926 46.656 
        106.926 96.852 0 66.473-36.945 116.086-91.148 116.086-18.23 0-35.383-9.836-41.238-21.105 
        0 0-9.875 39.125-12.305 48.656-4.484 17.293-16.617 34.406-25.445 
        46.105C205.484 507.977 230.141 512 256 512c141.164 0 256-114.836 
        256-256S397.164 0 256 0z"/>
      </svg>
    </button>
    <span class="tooltip">Upwork</span>
  </div>
</div>

{/* Information */}
<div className="info">
  <p>Copyright <span>&copy;</span> All rights reserved - | <span>2025</span></p>
  <p>Build with efforts By Bilal.</p>
</div>
     </div>
     {/* title */}
      <h1 className="gradient-shine-text">Bilal Azeem</h1>
    </footer>
  )
}





<div class="outer">
  <div class="dot"></div>
  <div class="card">
    <div class="glass-blur"></div>
    <div class="card-content">
      <h3 class="card-title">UI/UX Design</h3>
      <p class="card-para">
        Crafting stunning, user-focused designs for seamless experiences—from wireframes to high-fidelity interfaces.
      </p>

   
      <div class="social-row">
       
        <div class="social-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
            <path d="M8 2H1L9.26 13.01L1.45 22h2.65l6.39-7.35L16 22h7L14.39 10.52 21.8 2h-2.65l-5.99 6.89L8 2zM17 20L5 4h2L19 20h-2z" />
          </svg>
          <span class="tooltip">X</span>
        </div>

       
        <div class="social-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.47 2.87 8.26 6.84 9.6.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1.01.07 1.54 1.07 1.54 1.07.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.05 1.03-2.78-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06a9.43 9.43 0 012.5-.35c.85 0 1.71.12 2.5.35 1.9-1.34 2.74-1.06 2.74-1.06.56 1.42.21 2.47.1 2.73.64.73 1.03 1.65 1.03 2.78 0 3.98-2.34 4.85-4.57 5.11.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.58.69.48A10.19 10.19 0 0022 12.19C22 6.58 17.52 2 12 2z"/>
          </svg>
          <span class="tooltip">GitHub</span>
        </div>
 
       <div class="social-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM17.5 6a1 1 0 110 2 1 1 0 010-2z"/>
          </svg>
          <span class="tooltip">Instagram</span>
        </div>
      </div>
    </div>

   
    <div class="line topl"></div>
    <div class="line bottoml"></div>
    <div class="line leftl"></div>
    <div class="line rightl"></div>
  </div>
</div>



