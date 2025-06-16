// src/Pages/HerFeatures.js (assuming filename is HerFeatures.js as per your App.js, ideally HeroFeatures.js)
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faBuildingShield, faGlobe } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const iconMap = {
  faGears: faGears,
  faBuildingShield: faBuildingShield,
  faGlobe: faGlobe,
};

const featuresData = [
  { icon: 'faGears', title: 'Advanced Technology Solutions', text: 'Pioneering ICT infrastructure, custom software, smart campus systems, and cloud solutions.' },
  { icon: 'faBuildingShield', title: 'Sustainable Infrastructure', text: 'Expertise in construction, real estate, renewable energy, and responsible resource management.' },
  { icon: 'faGlobe', title: 'Cross-Sectoral Development', text: 'Driving impact through integrated projects in agriculture, education, media, trade, and AID initiatives.' },
];

const HeroFeatures = () => {
  const { ref: sectionRef, inView: sectionInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="hero-features-container">
      <Container>
        <Row className="g-4 justify-content-center">
          {featuresData.map((feature, index) => (
            <Col
              md={6} lg={4} key={index}
              className={`d-flex align-items-stretch animate-on-scroll fade-in-up ${sectionInView ? 'is-visible' : ''}`}
              style={{ transitionDelay: sectionInView ? `${index * 0.15}s` : '0s' }}
            >
              <div className="feature-box w-100">
                <div className="feature-icon mb-3">
                  {iconMap[feature.icon] && (
                     <FontAwesomeIcon icon={iconMap[feature.icon]} size="2x" />
                  )}
                </div>
                <h6 className="feature-title">{feature.title}</h6>
                <p className="feature-text">{feature.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HeroFeatures;