// src/Pages/Services/Services.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../../App.css'; 
import useScrollAnimation from '../../hooks/useScrollAnimation';

const servicesData = [
    { id: 1, icon: 'fas fa-laptop-code', title: 'Michuu ICT', description: 'Innovative ICT solutions for modern challenges, driving digital transformation.', link: '/services/ict' },
    { id: 2, icon: 'fas fa-hammer', title: 'Michuu Construction', description: 'Reliable construction services delivering quality infrastructure projects.', link: '/services/construction' },
    { id: 3, icon: 'fas fa-solar-panel', title: 'Michuu Renewable', description: 'Sustainable and eco-friendly energy solutions for a greener future.', link: '/services/renewable' },
    { id: 4, icon: 'fas fa-gem', title: 'Michuu Mining', description: 'Efficient and responsible mining operations and resource management.', link: '/services/mining' },
    { id: 5, icon: 'fas fa-seedling', title: 'Michuu Agriculture', description: 'Agricultural services boosting productivity and food security with technology.', link: '/services/agriculture' },
    { id: 6, icon: 'fas fa-industry', title: 'Michuu Manufacturing', description: 'High-quality manufacturing processes for diverse industrial needs.', link: '/services/manufacturing' },
    { id: 7, icon: 'fas fa-shipping-fast', title: 'Michuu Import & Export', description: 'Streamlined import and export services for global trade.', link: '/services/importExport' },
    { id: 8, icon: 'fas fa-comments', title: 'Michuu Media', description: 'Creating engaging media content and communication strategies.', link: '/services/media' },
    { id: 9, icon: 'fas fa-book-reader', title: 'Michuu Smart Education', description: 'Innovative educational solutions and smart learning environments.', link: '/services/education' },
    { id: 10, icon: 'fas fa-hand-holding-heart', title: 'Michuu AID Project', description: 'Socio-economic projects focused on community development and aid.', link: '/services/aid' }
];

const ServiceCard = ({ service, isSelected, onClick, index, parentInView }) => {
    const { ref, inView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });

    return (
        <Col
            ref={ref}
            xs={12} sm={6} lg={4}
            className={`d-flex align-items-stretch service-card-col animate-on-scroll fade-in-up ${parentInView && inView ? 'is-visible' : ''}`}
            style={{ transitionDelay: parentInView && inView ? `${index * 0.1}s` : '0s' }}
        >
            <div
                className={`holder w-100 h-100 d-flex flex-column ${isSelected ? 'selected' : ''}`}
                onClick={onClick}
                role="button"
                tabIndex="0"
                onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
            >
                <div className="text-center pt-3 pb-2">
                    <div className="icon mb-3"> <i className={service.icon}></i> </div>
                    <h3 className="fw-semibold">{service.title}</h3>
                </div>
                <p className="text-center px-3 flex-grow-1">{service.description}</p>
                <div className="text-center mt-auto pb-4">
                    {
                        // ** FIX APPLIED HERE **
                        service.link === '/services/ict' ? (
                            <Button variant="primary" as={Link} to={service.link} onClick={(e) => e.stopPropagation()} className="btn">
                                Read More
                            </Button>
                        ) : service.link === '/services/construction' ? (
                            <Button variant="primary" as={Link} to={service.link} onClick={(e) => e.stopPropagation()} className="btn">
                                Read More
                            </Button>
                        )
                        : service.link === '/services/renewable' ? (
                            <Button variant="primary" as={Link} to={service.link} onClick={(e) => e.stopPropagation()} className="btn">
                                Read More
                            </Button>
                        )
                        : service.link === '/services/mining' ? (
                            <Button variant="primary" as={Link} to={service.link} onClick={(e) => e.stopPropagation()} className="btn">
                                Read More
                            </Button>
                        )
                        : service.link === '/services/manufacturing' ? (
                            <Button variant="primary" as={Link} to={service.link} onClick={(e) => e.stopPropagation()} className="btn">
                                Read More
                            </Button>
                        )
                         : service.link === '/services/importExport' ? (
                            <Button variant="primary" as={Link} to={service.link} onClick={(e) => e.stopPropagation()} className="btn">
                                Read More
                            </Button>
                        )
                         : service.link === '/services/media' ? (
                            <Button variant="primary" as={Link} to={service.link} onClick={(e) => e.stopPropagation()} className="btn">
                                Read More
                            </Button>
                        )
                         : service.link === '/services/education' ? (
                            <Button variant="primary" as={Link} to={service.link} onClick={(e) => e.stopPropagation()} className="btn">
                                Read More
                            </Button>
                        )
                         : service.link === '/services/aid' ? (
                            <Button variant="primary" as={Link} to={service.link} onClick={(e) => e.stopPropagation()} className="btn">
                                Read More
                            </Button>
                        )
                         : (
                            <Button variant="secondary" href={service.link} onClick={(e) => e.stopPropagation()} className="btn">
                                Read More
                            </Button>
                        )
                    }
                </div>
            </div>
        </Col>
    );
};

function Services() {
    const [selectedServiceId, setSelectedServiceId] = useState(null);
    const { ref: sectionRef, inView: sectionInView } = useScrollAnimation({ threshold: 0.05 });
    const { ref: rowRef, inView: rowInView } = useScrollAnimation({ threshold: 0.1 });

    const handleCardClick = (id) => {
        setSelectedServiceId(prevId => (prevId === id ? null : id));
    };

    return (
        <section id="services" ref={sectionRef} className="block services-block page-section">
            <Container>
                <div className={`title-holder text-center mb-5 animate-on-scroll fade-in-down ${sectionInView ? 'is-visible' : ''}`}>
                    <h2 className="fw-bold">Our Services</h2>
                    <p className="subtitle text-muted">Explore the range of services we offer across diverse sectors.</p>
                </div>
                <Row ref={rowRef} className="gy-4 gx-4 justify-content-center">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            isSelected={selectedServiceId === service.id}
                            onClick={() => handleCardClick(service.id)}
                            index={index}
                            parentInView={rowInView}
                        />
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Services;