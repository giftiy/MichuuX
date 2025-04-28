import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Container } from 'react-bootstrap'; // Use React Bootstrap components
import logo from '../assets/img/logo.png'; // Make sure this path is correct
import '../App.css'; // Your custom styles (ensure navbar styles here don't conflict heavily)
import 'bootstrap/dist/css/bootstrap.min.css';
// Removed FontAwesome imports as React-Bootstrap's toggler is used by default

// --- Your Service Data (can be kept separate or defined here) ---
// It's slightly cleaner to define the paths directly here if they differ from simple hash links
const serviceLinks = [
    { path: '/services/ict', title: 'Michuu ICT' }, // Use router paths
    { path: '/services/construction', title: 'Michuu Construction' },
    { path: '/services/renewable', title: 'Michuu Renewable' },
    { path: '/services/mining', title: 'Michuu Mining' },
    { path: '/services/agriculture', title: 'Michuu Agriculture' },
    { path: '/services/manufacturing', title: 'Michuu Manufacturing' },
    { path: '/services/import-export', title: 'Michuu Import & Export' },
    { path: '/services/media', title: 'Michuu Media' },
    { path: '/services/education', title: 'Michuu Smart Education' },
    { path: '/services/aid', title: 'Michuu AID Project' }
];

function Navbar() {
  // State to control the expanded/collapsed state of the Navbar on mobile
  const [expanded, setExpanded] = useState(false);

  // Function to close the Navbar when a link is clicked (useful on mobile)
  const handleNavClose = () => setExpanded(false);

  return (
    <BootstrapNavbar
      bg="dark"         // Background color
      variant="dark"     // Makes text/icons light for dark background
      expand="lg"        // Collapse below 'lg' screens
      fixed="top"        // Keep Navbar fixed at the top
      expanded={expanded} // Control expanded state
      onToggle={setExpanded} // Update state when toggler is clicked
      className="custom-navbar-styles" // Add your own class for specific overrides if needed
    >
      <Container> {/* Use Container for proper padding */}
        {/* Brand Logo/Link */}
        <BootstrapNavbar.Brand as={Link} to="/" onClick={handleNavClose}>
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Michuu Logo"
          />
          {/* Optional: Add Brand Name Text */}
          {/* <span className="ms-2">Michuu Group</span> */}
        </BootstrapNavbar.Brand>

        {/* Toggler Button (React-Bootstrap handles the icon) */}
        <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Collapsible Content */}
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto"> {/* ms-auto pushes items to the right */}

            {/* Standard Links - Use 'href' for same-page scroll, 'as={Link} to' for routes */}
            <Nav.Link href="#home" onClick={handleNavClose}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={handleNavClose}>About</Nav.Link>

            {/* Services Dropdown */}
            <NavDropdown title="Services" id="services-nav-dropdown">
              {serviceLinks.map((service) => (
                <NavDropdown.Item
                  key={service.path}
                  as={Link}         // Use Link for routing
                  to={service.path}   // Set the route path
                  onClick={handleNavClose} // Close navbar on click
                >
                  {service.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            {/* More Standard Links */}
            <Nav.Link href="#partners" onClick={handleNavClose}>Partners</Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavClose}>Contact Us</Nav.Link>

          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;