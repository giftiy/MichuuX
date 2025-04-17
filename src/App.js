import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header'; // Import your Hero component
import About from './components/About'; // Assuming this is a SEPARATE page/view
import Services from './components/Services'; // Assuming this is a SEPARATE page/view

import 'bootstrap/dist/css/bootstrap.min.css';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
   <Navbar />
   <Header />
   <About />
   <Services />
   <Partners />
   <Contact />
   <Footer />
   </>
  );
}

export default App;