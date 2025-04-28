import React from 'react';

// 1. Import routing components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- Your Existing Component Imports ---
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import AppServices from './components/Services'; 
import Partners from './components/Partners';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Ict from './Pages/Ict'; 



function App() {
  return (
    <Router>
      <> 
        <Navbar />
        <Routes>

          <Route
            path="/"
            element={
              <>
                {/* Components to show on the home page */}
                <Header />
                <About />
                <AppServices /> {/* The list of services appears on the home page */}
                <Partners />
                <Contact />
              </>
            }
          />
          <Route path="/Services/Ict" element={<Ict />} />
          {/* This uses the imported 'Ict' variable, which is correct */}

          

        </Routes>

        {/* Footer is inside Router but outside Routes to appear on all pages */}
        <Footer />
      </>
    </Router>
  );
}

export default App;