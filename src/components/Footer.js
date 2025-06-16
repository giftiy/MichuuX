// src/components/Footer.js
import React from 'react';
import { Container, Row, Col, Nav, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import michuuxLogo from "../assets/img/log.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import useScrollAnimation from '../hooks/useScrollAnimation';// Import the hook

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { ref: sectionRef, inView: sectionInView } = useScrollAnimation({ threshold: 0.05 }); // Observe the whole footer

  const socialLinks = [
    { id: 'fb', icon: faFacebookF, url: '#', label: 'Facebook' },
    { id: 'tw', icon: faTwitter, url: '#', label: 'Twitter' },
    { id: 'li', icon: faLinkedinIn, url: '#', label: 'LinkedIn' },
    { id: 'ig', icon: faInstagram, url: '#', label: 'Instagram' }
  ];

  const quickLinks = [
    { id: 'home', path: '/', text: 'Home' },
    { id: 'about', path: '/#about', text: 'About' },
    { id: 'services', path: '/#services', text: 'Services' },
    { id: 'contact', path: '/#contact', text: 'Contact' }
  ];

  const michuuxPhoneNumber = "+251 900 000 000...";
  const michuuxEmail = "info@michuux.com";
  const michuuxAddress = "Addis Ababa, Ethiopia";
  const mainFooterClass = "main-footer-michuux";

  const 애니메이션딜레이 = (index) => ({
    transitionDelay: sectionInView ? `${index * 0.15}s` : '0s',
  });

  return (
    <footer id="footer" ref={sectionRef} className={`${mainFooterClass} footer-section text-light position-relative py-5`}>
      <Container>
        <Row className="g-4 justify-content-between">
          <Col xs={12} md={4} lg={3} className={`mb-4 mb-lg-0 footer-col-animate ${sectionInView ? 'is-visible' : ''}`} style={애니메이션딜레이(0)}>
             <Link to="/" className="mb-3 d-inline-block">
                  <Image src={michuuxLogo} alt="MichuuX Logo" height="40" />
             </Link>
             <p className="small mb-3">
                  Xpertise that Transforms. Innovation that Empowers.
             </p>
             <div className="d-flex">
                  {socialLinks.map(social => (
                      <a
                          key={social.id}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-light me-3 social-icon-link"
                          aria-label={social.label}
                      >
                          <FontAwesomeIcon icon={social.icon} size="lg" />
                      </a>
                  ))}
             </div>
          </Col>

          <Col xs={6} md={2} lg={2} className={`mb-4 mb-lg-0 footer-col-animate ${sectionInView ? 'is-visible' : ''}`} style={애니메이션딜레이(1)}>
             <h5 className="fw-semibold mb-3">Quick Links</h5>
             <Nav className="flex-column">
                  {quickLinks.map(link => (
                      link.path.startsWith('/#') ? (
                          <Nav.Link
                              key={link.id}
                              href={link.path}
                              className="text-light py-1 px-0 footer-nav-link"
                          >
                              {link.text}
                          </Nav.Link>
                      ) : (
                           <Nav.Link
                              key={link.id}
                              as={Link}
                              to={link.path}
                              className="text-light py-1 px-0 footer-nav-link"
                          >
                              {link.text}
                          </Nav.Link>
                      )
                  ))}
             </Nav>
          </Col>

          <Col xs={12} md={3} lg={4} className={`mb-4 mb-lg-0 footer-col-animate ${sectionInView ? 'is-visible' : ''}`} style={애니메이션딜레이(2)}>
             <h5 className="fw-semibold mb-3">Contact Us</h5>
             <address className="not-italic small">
                  <p className="mb-1 d-flex align-items-start">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 mt-1 fa-fw" />
                      <span>{michuuxAddress}</span>
                  </p>
                  <p className="mb-1 d-flex align-items-center">
                      <FontAwesomeIcon icon={faEnvelope} className="me-2 fa-fw" />
                      <a href={`mailto:${michuuxEmail}`} className="text-light text-decoration-none footer-contact-link">{michuuxEmail}</a>
                  </p>
                  <p className="mb-0 d-flex align-items-center">
                      <FontAwesomeIcon icon={faPhone} className="me-2 fa-fw" />
                      <a href={`tel:${michuuxPhoneNumber}`} className="text-light text-decoration-none footer-contact-link">{michuuxPhoneNumber}</a>
                  </p>
             </address>
          </Col>

          <Col xs={6} md={3} lg={2} className={`mb-4 mb-lg-0 d-flex flex-column justify-content-start align-items-start align-items-md-end footer-col-animate ${sectionInView ? 'is-visible' : ''}`} style={애니메이션딜레이(3)}>
              <h5 className="fw-semibold mb-3">Connect</h5>
              <p className="small mb-3 d-none d-md-block">Let's discuss your project.</p>
              <Button
                  as={Link}
                  to="/#contact"
                  variant="primary"
                  size="sm"
                  className="btn" // Ensure .btn class for general styling
              >
                  Contact Us
              </Button>
          </Col>
        </Row>

        <Row>
            <Col className={`animate-on-scroll fade-in-up ${sectionInView ? 'is-visible' : ''}`} style={{transitionDelay: sectionInView ? '0.6s' : '0s'}}>
                <div className="mt-5 pt-4 border-top border-secondary text-center small">
                    <p className="mb-0">
                        © {currentYear} MichuuX Trading PLC. All Rights Reserved.
                    </p>
                </div>
            </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;