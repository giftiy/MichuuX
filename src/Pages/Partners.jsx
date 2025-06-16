// src/Pages/Partners.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import useScrollAnimation from '../hooks/useScrollAnimation';

// Assuming assets are exported from src/assets/index.js or similar
// If not, you'll need to import each partner image individually
import {
  partner1, partner2, partner3, partner4, partner5, partner6, partner7,
  partner8, partner9, partner10, partner11, partner12, partner13,
  partner14, partner16
} from "../assets"; // ADJUST THIS PATH if your assets are structured differently

const allPartners = [
  partner1, partner2, partner3, partner4, partner5, partner6, partner7,
  partner8, partner9, partner10, partner11, partner12, partner13,
  partner14,  partner16
].filter(p => p); // Filter out undefined if some are missing

const Partners = () => {
  const { ref: sectionRef, inView: sectionInView } = useScrollAnimation({ threshold: 0.05 });
  // The row itself will trigger the stagger calculation in CSS based on .has-animation
  const { ref: rowRef, inView: rowInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });


  return (
    <section id="partners" ref={sectionRef} className="partner-section page-section">
      <Container id="partners-container" className="py-5 my-5">
        <div className={`title-holder mb-6 animate-on-scroll fade-in-down ${sectionInView ? 'is-visible' : ''}`}>
          <h1 className='text-center font-poppins fw-semibold text-slate-800 fs-1'>
            Our Partners
          </h1>
        </div>

        <Row
          ref={rowRef}
          xs={2} sm={3} md={4} lg={2} 
          className={`g-5 gy-5 gx-5 justify-content-center align-items-stretch partner-logo-row ${rowInView ? 'has-animation' : ''}`}
        >
          {allPartners.map((logo, index) => (
            <Col
              key={index}
              xs={6} sm={4} md={3} lg={2}
              // Animation is now primarily handled by CSS stagger on .partner-logo-item.is-visible
              // The .is-visible class is added by the .partner-logo-row.has-animation logic in CSS
             className={`d-flex justify-content-center align-items-center partner-logo-item animate-on-scroll ${rowInView ? 'is-visible' : ''}`}
              style={{ transitionDelay: rowInView ? `${index * 0.05}s` : '0s' }} // Individual delay for stagger
            >
              <Image
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                className="img-fluid partner-logo"
               style={{ maxHeight: '60px', maxWidth: '150px' }} // MaxHeight is in CSS now
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Partners;