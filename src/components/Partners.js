import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import '../App.css'; // Your custom styles if needed

// Import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'; // Use Image for better handling

// Import partner logos (Make sure these are exported correctly from assets)
import {
  partner1, partner2, partner3, partner4, partner5, partner6, partner7,
  partner8, partner9, partner10, partner11, partner12, partner13,
  partner14, partner15, partner16
} from "../assets";

// Combine logos into an array for easier mapping
const allPartners = [
  partner1, partner2, partner3, partner4, partner5, partner6, partner7,
  partner8, partner9, partner10, partner11, partner12, partner13,
  partner14, partner15, partner16
];

const Partners = () => {
  return (
    <section id="partners">
    <Container id="partners" className="py-5 my-5 partner-section">
      {/* Use text-center utility class */}
      <h1 className='text-center font-poppins fw-semibold text-slate-800 fs-1 mb-5'>
        Our Partners
      </h1>

      {/* Use Bootstrap Row for the grid layout */}
      {/* Define column counts for different screen sizes */}
      {/* Add gy-4 (vertical gap) and gx-3 (horizontal gap) */}
      <Row xs={2} sm={3} md={4} lg={6} className="gy-5 gx-4 justify-content-center align-items-center partner-logo-row">
        {allPartners.map((logo, index) => (
          <Col key={index} className="d-flex justify-content-center align-items-center">
            {/* Use react-bootstrap Image component */}
            {/* Use 'img-fluid' for responsiveness, 'partner-logo' for custom styles */}
            <Image
              src={logo}
              alt={`Partner Logo ${index + 1}`}
              className="img-fluid partner-logo" // Responsive, add custom class
              style={{ maxHeight: '80px', maxWidth: '150px' }} // Control max size
            />
          </Col>
        ))}
      </Row>
    </Container>
    </section>
  );
}

export default Partners;