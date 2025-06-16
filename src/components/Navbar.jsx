// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Container, Image, Button } from 'react-bootstrap'; // Added Button
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Added
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'; // Added
import log from '../assets/img/log.jpg';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const serviceLinks = [
    { path: '/services/ict', title: 'Michuu ICT'}  ,
    { path: '/services/construction', title: 'Michuu Construction' },
    { path: '/services/renewable', title: 'Michuu Renewable' },
    { path: '/services/mining', title: 'Michuu Mining' },
    { path: '/services/agriculture', title: 'Michuu Agriculture' },
    { path: '/services/manufacturing', title: 'Michuu Manufacturing' },
    { path: '/services/importExport', title: 'Michuu Import & Export' },
    { path: '/services/media', title: 'Michuu Media' },
    { path: '/services/education', title: 'Michuu Smart Education' },
    { path: '/services/aid', title: 'Michuu AID Project' }
];

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Effect to apply the theme class to body and save to localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleNavClose = () => setExpanded(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <BootstrapNavbar
    //   bg="dark" // bg and variant are now controlled by CSS variables
    //   variant="dark"
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={`
        custom-navbar-styles
        ${scrolled ? 'navbar-scrolled' : ''}
        ${navVisible ? '' : 'navbar-hidden'}
      `}
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" onClick={handleNavClose} className="navbar-brand-custom">
          <Image
            src={log}
            className="d-inline-block align-top navbar-logo-img"
            alt="Michuu Logo"
          />
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />

        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center"> {/* align-items-center for toggle button */}
            <Nav.Link href="/#home" onClick={handleNavClose}>Home</Nav.Link>
            <Nav.Link href="/#about" onClick={handleNavClose}>About</Nav.Link>
            <NavDropdown title="Services" id="services-nav-dropdown">
              {serviceLinks.map((service) => (
                <NavDropdown.Item
                  key={service.path}
                  as={service.path.startsWith('/') && !service.path.includes('/#') ? Link : 'a'}
                  to={service.path.startsWith('/') && !service.path.includes('/#') ? service.path : undefined}
                  href={service.path.includes('/#') ? service.path : undefined}
                  onClick={handleNavClose}
                >
                  {service.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href="/#partners" onClick={handleNavClose}>Partners</Nav.Link>
            <Nav.Link href="/#contact" onClick={handleNavClose}>Contact Us</Nav.Link>
            {/* Theme Toggle Button */}
           
           
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;