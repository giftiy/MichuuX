import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Your custom styles (ensure theme variables are here)

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

// Import Font Awesome Icons (brands) - like in AppServices example logic
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
// Optional: Import solid icons if needed for other things
// import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Define social links - easy to manage
  const socialLinks = [
    { id: 'fb', icon: faFacebookF, url: 'https://facebook.com/yourpage', label: 'Facebook' },
    { id: 'tw', icon: faTwitter, url: 'https://twitter.com/yourprofile', label: 'Twitter' },
    { id: 'li', icon: faLinkedinIn, url: 'https://linkedin.com/company/yourcompany', label: 'LinkedIn' },
    { id: 'ig', icon: faInstagram, url: 'https://instagram.com/yourprofile', label: 'Instagram' },
  ];

  // Define quick links - easy to manage
  const quickLinks = [
    { id: 'home', url: '#home', text: 'Home' },
    { id: 'about', url: '#about', text: 'About' },
    { id: 'services', url: '#services', text: 'Services' },
    { id: 'contact', url: '#contact', text: 'Contact' },
  ];

  return (
    <footer id="footer" className="footer-section text-light py-4">
      <Container>
        <Row className="gy-4 align-items-center">

          {/* Column 1: Copyright */}
          <Col md={4} className="text-center text-md-start">
            <p className="mb-0 copyright-text">
              © {currentYear} MichuuX Trading PLC. All Rights Reserved.
            </p>
            {/* Optional: Add logo here if desired */}
            {/* <img src={yourLogoVariable} alt="Company Logo" height="30" className="mt-2 d-none d-md-inline-block"/> */}
          </Col>

          {/* Column 2: Quick Links (Mapped from array) */}
          <Col md={4} className="text-center">
            <Nav className="justify-content-center footer-links flex-wrap"> {/* Added flex-wrap */}
              {quickLinks.map(link => (
                 <Nav.Link key={link.id} href={link.url} className="text-light px-2 py-1">{link.text}</Nav.Link>
              ))}
            </Nav>
          </Col>

          {/* Column 3: Social Media Icons (Mapped from array) */}
          <Col md={4} className="text-center text-md-end social-icons">
            {socialLinks.map(social => (
               <a
                 key={social.id}
                 href={social.url}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-light me-3 social-icon-link" // Added specific class
                 aria-label={social.label}
               >
                 <FontAwesomeIcon icon={social.icon} size="lg" /> {/* Use FontAwesomeIcon component */}
               </a>
            ))}
          </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;