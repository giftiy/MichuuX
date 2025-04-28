import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; // <--- Import Button
import { Link } from 'react-router-dom';   // <--- Import Link
import '../App.css';
import { useInView } from 'react-intersection-observer';

// Ensure Font Awesome is set up if using <i> tags

const servicesData = [
    // Using a specific path for the ICT link for routing
    { id: 1, icon: 'fas fa-laptop-code', title: 'Michuu ICT', description: 'Innovative ICT solutions...', link: '/services/ict' }, // <-- Changed link for clarity/consistency
    { id: 2, icon: 'fas fa-hammer', title: 'Michuu Construction', description: 'Reliable construction services...', link: '#services/construction' },
    { id: 3, icon: 'fas fa-solar-panel', title: 'Michuu Renewable', description: 'Sustainable and eco-friendly...', link: '#services/renewable' },
    // ... other services remain the same
    { id: 4, icon: 'fas fa-pickaxe', title: 'Michuu Mining', description: 'Efficient mining solutions...', link: '#services/mining' },
    { id: 5, icon: 'fas fa-seedling', title: 'Michuu Agriculture', description: 'Agricultural services boosting...', link: '#services/agriculture' },
    { id: 6, icon: 'fas fa-industry', title: 'Michuu Manufacturing', description: 'High-quality manufacturing...', link: '#services/manufacturing' },
    { id: 7, icon: 'fas fa-shipping-fast', title: 'Michuu Import & Export', description: 'Streamlined import and export...', link: '#services/import-export' },
    { id: 8, icon: 'fas fa-comments', title: 'Michuu Media', description: 'Creating engaging media content...', link: '#services/media' },
    { id: 9, icon: 'fas fa-book-reader', title: 'Michuu Smart Education', description: 'Innovative educational solutions...', link: '#services/education' },
    { id: 10, icon: 'fas fa-hand-holding-heart', title: 'Michuu AID Project', description: 'Socio-economic projects focused...', link: '#services/aid' }
];

// Updated ServiceCard component
const ServiceCard = ({ service, isSelected, onClick, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Check if this is the ICT card (adjust condition if needed)
  const isIctService = service.id === 1;

  return (
    <Col
      ref={ref}
      xs={12} sm={6} lg={4}
      className={`d-flex align-items-stretch service-card-col ${inView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`holder w-100 h-100 d-flex flex-column ${isSelected ? 'selected' : ''}`}
        // Only trigger card selection if the card itself (not the button) is clicked
        onClick={onClick}
        role="button"
        tabIndex="0"
        onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
      >
        <div className="text-center pt-3 pb-2">
          <div className="icon mb-3">
            <i className={service.icon}></i>
          </div>
          <h3 className="fw-semibold">{service.title}</h3>
        </div>
        <p className="text-center px-3 flex-grow-1">{service.description}</p>
        <div className="text-center mt-auto pb-4">
          {/* ---- CONDITIONAL BUTTON RENDERING ---- */}
          {isIctService ? (
            // ICT Service: Render Button as a Link to the specific route
            <Button
              variant="primary" // Or your preferred style
              as={Link}         // Render using the Link component
              to={service.link} // Use the link from data (should be '/services/ict')
              onClick={(e) => e.stopPropagation()} // Prevent card's onClick
            >
              Read More
            </Button>
          ) : (
            // Other Services: Render a standard button (could be disabled or link differently)
            <Button
              variant="secondary" // Or your preferred style
              href={service.link}  // Use the original href for now (might just be '#')
              onClick={(e) => e.stopPropagation()} // Prevent card's onClick
              // disabled // Optional: uncomment to disable buttons for non-ICT services
            >
              Read More
            </Button>
          )}
          {/* ---- END CONDITIONAL BUTTON RENDERING ---- */}
        </div>
      </div>
    </Col>
  );
};


function AppServices() {
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const handleCardClick = (id) => {
    // Only allow selecting if the card itself is clicked,
    // the button click is stopped by stopPropagation
     setSelectedServiceId(prevId => (prevId === id ? null : id));
  };


  return (
    <section id="services" className="block services-block">
      <Container>
        <div className="title-holder text-center mb-5">
          <h2 className="fw-bold">Our Services</h2>
          <p className="subtitle text-muted">Explore the range of services we offer across diverse sectors.</p>
        </div>

        <Row className="gy-4 gx-4 justify-content-center">
          {
            servicesData.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                isSelected={selectedServiceId === service.id}
                // Pass the handler for card selection (not button click)
                onClick={() => handleCardClick(service.id)}
                index={index}
              />
            ))
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;