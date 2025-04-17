import '../App.css'; // Adjust the import path if needed
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logo.png'; // Make sure this path is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react'; // Import useState for toggler if using React state management later
import { Nav, Navbar as BootstrapNavbar, NavDropdown, Container } from 'react-bootstrap'; // Optional: Use React Bootstrap components for better integration

function Navbar() {
  // Optional: State management for toggler (Recommended if using React Bootstrap)
  // const [expanded, setExpanded] = useState(false);

  return (
    // Using standard Bootstrap classes here. If you switch fully to react-bootstrap components,
    // you might replace this structure with <BootstrapNavbar>, <Nav>, etc.
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top"> {/* Added fixed-top for example */}
      <div className='container'>
        <a className="navbar-brand" href="#home"> {/* Use #home or actual link */}
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Michuu Logo" />
          {/* Optional: Add Brand Name Text */}
          {/* <span className="ms-2 text-white">Michuu Group</span> */}
        </a>
        {/* Standard Bootstrap Toggler Button */}
        <button
          className="navbar-toggler" // Use className
          type="button"
          data-bs-toggle="collapse" // Use data-bs-toggle for Bootstrap 5+
          data-bs-target="#navbarSupportedContent" // Use data-bs-target for Bootstrap 5+
          aria-controls="navbarSupportedContent"
          aria-expanded="false" // This should ideally be controlled by state
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} className="navbar-toggler-icon-custom" /> {/* Use CSS class for color */}
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* ms-auto pushes nav items to the right */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-3"> {/* Use standard padding like px-3 */}
            <li className="nav-item"> {/* Removed hardcoded 'active' */}
              <a className="nav-link" href="#home">Home</a> {/* Use #ids or actual links */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            {/* Correct Dropdown Structure */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#" // Link to '#' or prevent default if handled by JS/React
                id="navbarDropdownMenuLink"
                role="button" // Add role="button"
                data-bs-toggle="dropdown" // Use data-bs-toggle for Bootstrap 5+
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> {/* Use ul for dropdown menu */}
                <li><a className="dropdown-item" href="#services/ict">Michuu ICT</a></li>
                <li><a className="dropdown-item" href="#services/construction">Michuu Construction</a></li>
                <li><a className="dropdown-item" href="#services/renewable">Michuu Renewable</a></li>
                <li><a className="dropdown-item" href="#services/mining">Michuu Mining</a></li>
                <li><a className="dropdown-item" href="#services/agriculture">Michuu Agriculture</a></li>
                <li><a className="dropdown-item" href="#services/manufacturing">Michuu Manufacturing</a></li>
                <li><a className="dropdown-item" href="#services/import-export">Michuu Import & Export</a></li>
                <li><a className="dropdown-item" href="#services/media">Michuu Media</a></li>
                <li><a className="dropdown-item" href="#services/education">Michuu Smart Education</a></li>
                <li><a className="dropdown-item" href="#services/aid">Michuu AID Project</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#partners">Partners</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;