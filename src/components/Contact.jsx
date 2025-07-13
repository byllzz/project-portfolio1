import React, { useState } from 'react';
import '../styles/Contact.css';
import { FaEnvelope, FaGithub, FaXTwitter, FaInstagram, FaLinkedinIn, FaUser, FaWhatsapp, FaMap } from 'react-icons/fa6';


const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="contact-glass" id="contact">
      <section className="contact-section">
        {showAlert && (
          <div className="success-alert">
            Message Sent Successfully!
            <div className="progress-bar"></div>
          </div>
        )}

        <div className="contact-container">
          {/* Left Info Panel */}
          <div className="contact-info ">
            <h3 className="contact-title hover-trigger" data-cursor-text="Reach Out Me !">
              <span className="actual-text highlight-glow-contact">Contact Me</span>
            </h3>
            <p>Feel free to reach out via the form or connect through social links below.</p>

            <div className="info-item">
              <FaMap className="icon"  style={{color : '#f9f9'}}/>
              <div>
                <h4>Address</h4>
                <a
                  href="https://www.google.com/maps?q=Chachran+Sharif,+Punjab,+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in Google Maps"
                >
                  Chachran Sharif, Punjab, Pakistan
                </a>
              </div>
            </div>

            <div className="info-item">
              <FaWhatsapp className="icon" style={{color : 'green'}} />
              <div>
                <h4>Whatsapp</h4>
                <a
                  href="https://wa.me/923316995177"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Chat on WhatsApp"
                >
                  +923316995177</a> 
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope className="icon" style={{color : 'red'}} />
              <div>
                <h4>Email</h4>
                <a
                  href="mailto:infobilalmalik03@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Email Me"
                >
                  Infobilalmalik03@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="social">
              <p>Other's Platforms:</p>
              <div className="social-icons">
                <a
                  href="https://github.com/byllzz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub style={{ color: '#6e5494' }} />
                </a>

                {/* <a
                  href="https://instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="icon instagram"
                >
                  <FaInstagram style={{ color: '#E1306C' }} />
                </a> */}

                {/* <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="icon twitter"
                >
                  <FaXTwitter style={{ color: '#1DA1F2' }} />
                </a> */}

                <a
                  href="https://www.linkedin.com/in/malik-bilal-91149a36b"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="icon linkedin"
                >
                  <FaLinkedinIn style={{ color: '#0077b5' }} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="contact-form">
            <form
              action="https://formsubmit.co/infobilalmalik03@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_captcha" value="false" />
             

              <h3>Send Message</h3>

              <div className="input-wrapper">
                <FaUser className="icon-left" />
                <input id="name" name="name" type="text" required placeholder=" " />
                <label htmlFor="name">Full Name</label>
              </div>

              <div className="input-wrapper">
                <FaEnvelope className="icon-left" />
                <input id="email" name="email" type="email" required placeholder=" " />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-wrapper">
                <textarea id="message" name="message" required placeholder=" " rows="4"></textarea>
                <label htmlFor="message">Your Message</label>
              </div>

              <button className="contact-btn" type="submit">Send IT !</button>
            </form>
          </div>
        </div>

       
      </section>
    </div>
  );
};

export default Contact;
