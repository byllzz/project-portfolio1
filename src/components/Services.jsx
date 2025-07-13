import React from 'react'
import { FiMonitor, FiSmartphone, FiPenTool, FiCode } from 'react-icons/fi';
import '../styles/Services.css'

export default function Services() {
  return (
      <section className="services-section" id='services'>
      <div className="services-content">
       <h2 className="services-heading">
  <span>I collaborate with startups</span> and bold thinkers<br />
  <span>to ship <span className="highlight-glow-service">experiences</span> that stand out.</span>
</h2>

        <div className="services-pill hover-trigger" data-cursor-text="Choose your Need !">Services</div>

        <div className="services-grid">
          <div className="service-item">
            <FiMonitor className="service-icon" />
            <h3 className='service-boxed'>UX & UI</h3>
            <p>Designing interfaces that are intuitive, efficient, and enjoyable to use.</p>
          </div>

          <div className="service-item">
            <FiSmartphone className="service-icon" />
            <h3 className='service-boxed'>Web & Mobile App</h3>
            <p>Transforming ideas into exceptional web and mobile app experiences.</p>
          </div>

          <div className="service-item">
            <FiPenTool className="service-icon" />
            <h3 className='service-boxed'>Design & Creative</h3>
            <p>Crafting visually stunning designs that connect with your audience.</p>
          </div>

          <div className="service-item">
            <FiCode className="service-icon" />
            <h3 className='service-boxed'>Development</h3>
            <p>Bringing your vision to life with the latest technology and design trends.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
