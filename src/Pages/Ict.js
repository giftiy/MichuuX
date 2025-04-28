import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../assets/img/cards/Ict.jpg';
import cardImg1 from '../assets/img/cards/card1.jpg';
import cardImg2 from '../assets/img/cards/card2.jpg';
import cardImg3 from '../assets/img/cards/card3.jpg';
import cardImg4 from '../assets/img/cards/card4.jpg';
import cardImg5 from '../assets/img/cards/card5.jpg';
import cardImg6 from '../assets/img/cards/card6.jpg';
import cardImg7 from '../assets/img/cards/card7.jpg';
import cardImg8 from '../assets/img/cards/card8.jpg';
import cardImg9 from '../assets/img/cards/card9.jpg';
import cardImg10 from '../assets/img/cards/card10.jpg';

const cardData = [
  { id: 1, title: "Data Center Solutions", image: cardImg1, text: "Design, build, and manage state-of-the-art data centers.", path: "/services/ict/data-center" },
  { id: 2, title: "Network Infrastructure", image: cardImg2, text: "Robust LAN/WAN, fiber optics, and wireless solutions.", path: "/services/ict/network" },
  { id: 3, title: "Software Development", image: cardImg3, text: "Custom web, mobile, and enterprise application development.", path: "/services/ict/software" },
  { id: 4, title: "Smart City Tech", image: cardImg4, text: "Implementing IoT and automation for smarter urban environments.", path: "/services/ict/smart-city" },
  { id: 5, title: "Cybersecurity", image: cardImg5, text: "Protecting your digital assets with advanced security measures.", path: "/services/ict/cybersecurity" },
  { id: 6, title: "Cloud Services", image: cardImg6, text: "Migration, hosting, and management on leading cloud platforms.", path: "/services/ict/cloud" },
  { id: 7, title: "Managed IT Support", image: cardImg7, text: "Comprehensive 24/7 technical support and system maintenance.", path: "/services/ict/support" },
  { id: 8, title: "Collaboration Tools", image: cardImg8, text: "Unified communications and modern collaboration platforms.", path: "/services/ict/collaboration" },
  { id: 9, title: "ICT Consulting", image: cardImg9, text: "Strategic guidance for digital transformation and optimization.", path: "/services/ict/consulting" },
  { id: 10, title: "Capacity Building", image: cardImg10, text: "Empowering teams with essential ICT training and skills.", path: "/services/ict/training" },
];

function Ict() {
  const heroTitle = "Michuu ICT";
  const heroDescription = `Welcome to Michuu ICT, where innovation meets technology. We provide cutting-edge ICT solutions including software development, network infrastructure, cybersecurity, cloud computing, and IT consulting tailored for your success.`;

  return (
    <>
      <section
        className="hero-block hero-block-static d-flex align-items-center"
        style={{
          backgroundImage: `url(${img1})`,
          minHeight: '90vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay"></div>
        <Container>
            <div className="hero-caption-custom text-center">
                <h1 className="display-4 text-white fw-bold">{heroTitle}</h1>
                <p className="lead text-white-50 mb-4">{heroDescription}</p>
            </div>
        </Container>
      </section>

      <section className="ict-cards-section py-5">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Our ICT Focus Areas</h2>
          <Row xs={1} sm={2} md={3} lg={5} className="g-4 justify-content-center">
            {cardData.map((card) => (
              <Col key={card.id} className="d-flex align-items-stretch">
                <Link to={card.path} className="card-link text-decoration-none">
                  <Card className="h-100 shadow-sm ict-service-card">
                    <Card.Img variant="top" src={card.image} className="ict-card-img" />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="text-center card-title-ict">{card.title}</Card.Title>
                      <Card.Text className="text-muted text-center small flex-grow-1">
                        {card.text}
                      </Card.Text>
                      {/* Optional Button/Link Text */}
                      {/* <Button variant="link" className="mt-auto align-self-center stretched-link-custom">Learn More →</Button> */}
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
              <Button variant="secondary" size="lg" as={Link} to="/#services">
               Back to All Services
              </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Ict;