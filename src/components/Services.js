import React, { useState } from 'react'; // Import useState
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'; // Ensure App.css is imported

// Ensure Font Awesome is set up (either globally or via react-fontawesome)

const servicesData = [
    { id: 1, icon: 'fas fa-laptop-code', title: 'Michuu ICT', description: 'Innovative ICT solutions to enhance your business operations.', link: '#services/ict' },
    { id: 2, icon: 'fas fa-hammer', title: 'Michuu Construction', description: 'Reliable construction services for various projects.', link: '#services/construction' },
    { id: 3, icon: 'fas fa-solar-panel', title: 'Michuu Renewable', description: 'Sustainable and eco-friendly energy solutions.', link: '#services/renewable' },
    { id: 4, icon: 'fas fa-pickaxe', title: 'Michuu Mining', description: 'Efficient mining solutions for various minerals.', link: '#services/mining' },
    { id: 5, icon: 'fas fa-seedling', title: 'Michuu Agriculture', description: 'Agricultural services boosting productivity and sustainability.', link: '#services/agriculture' },
    { id: 6, icon: 'fas fa-industry', title: 'Michuu Manufacturing', description: 'High-quality manufacturing services for diverse sectors.', link: '#services/manufacturing' },
    { id: 7, icon: 'fas fa-shipping-fast', title: 'Michuu Import & Export', description: 'Streamlined import and export services for global trade.', link: '#services/import-export' },
    { id: 8, icon: 'fas fa-comments', title: 'Michuu Media', description: 'Creating engaging media content for your brand.', link: '#services/media' },
    { id: 9, icon: 'fas fa-book-reader', title: 'Michuu Smart Education', description: 'Innovative educational solutions for modern learning.', link: '#services/education' },
    { id: 10, icon: 'fas fa-hand-holding-heart', title: 'Michuu AID Project', description: 'Socio-economic projects focused on community aid.', link: '#services/aid' }
];

function AppServices() {
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const handleCardClick = (id) => {
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
            servicesData.map(service => {
              // Check if the current service is the selected one
              const isSelected = selectedServiceId === service.id;

              return (
                <Col xs={12} sm={6} lg={4} key={service.id} className="d-flex align-items-stretch">
                  {/* Add onClick handler and conditional 'selected' class */}
                  <div
                    className={`holder w-100 h-100 d-flex flex-column ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleCardClick(service.id)} // Set selected ID on click
                    role="button" // Add role for accessibility
                    tabIndex="0" // Make it focusable
                    onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCardClick(service.id) }} // Allow selection with keyboard
                  >
                    <div className="text-center pt-3 pb-2">
                      <div className="icon mb-3 animate-icon">
                        {/* Removed inline style, color is handled by CSS */}
                        <i className={service.icon}></i>
                      </div>
                      <h3 className="fw-semibold">{service.title}</h3>
                    </div>
                    <p className="text-center px-3 flex-grow-1">{service.description}</p>
                    <div className="text-center mt-auto pb-4">
                      <a href={service.link} className="btn" onClick={(e) => e.stopPropagation()}> {/* Prevent card selection when clicking button */}
                          Read More
                      </a>
                    </div>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;