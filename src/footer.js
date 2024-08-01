// import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

// function Footer() {
//   return (
//     <>
//       <footer className='footer'>
//         {/* content below */}
//         <div className="footer-content">
//           <h1>Subbu</h1>
//         </div>
//         <div>
//         <p>Copy Rights @ subbu-web 2024</p>
//         </div>
//         <div className="footer-icons">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon icon={faFacebook} />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon icon={faTwitter} />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon icon={faInstagram} />
//           </a>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Footer;

import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Us */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt />G5 Sai Krupa apartments, no 35, 100 feet Tharmani link road, VelacheryChennai -600042 </p>
          <p><FaPhone /> Phone: +91- 9884963298 / 7550046649</p>
          <p><FaEnvelope /> Email: sparkersubbu2011@gmail.com</p>
          <div className="footer-social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Consultation Form */}
        <div className="footer-consultation">
          <h3>Let's make a consultation with us!</h3>
          <form>
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </footer>
    <footer className='footer'>
        <div className="footer-content">
       </div>
        <div>
         <p>Copy Rights @ subbu-web 2024</p>
         </div>
      </footer>
    
   </>
  );
}

export default Footer;

