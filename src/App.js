import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Ict from './Pages/Services/Ict/Ict'; // <--- This is now CORRECT
import DataCenter from './Pages/Services/Ict/datacenter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';
import Construction from './Pages/Services/construction/construction';
import MiningPage from './Pages/Services/mining/mining';
import Renewable from './Pages/Services/renewable/renewable';
import AgriculturePage from './Pages/Services/agriculture/agriculture';
import Manufacturing from './Pages/Services/manufacturing/manufacturing';
import ImportExport from './Pages/Services/importExport/importExport';
import Media from './Pages/Services/media/media';
import Education from './Pages/Services/education/education';
import Aid from './Pages/Services/aid/aid';
import Cloud from './Pages/Services/Ict/cloud';
import Support from './Pages/Services/Ict/support';
import Collaboration from './Pages/Services/Ict/collaboration';
import Consulting from './Pages/Services/Ict/consulting';
import Building from './Pages/Services/Ict/building';
import Cybersecurity from './Pages/Services/Ict/cybersecurity';
import Network from './Pages/Services/Ict/network';
import SmartCity from './Pages/Services/Ict/smart-city';
import Software from './Pages/Services/Ict/software';


function App() {
  return (
    <Router>
      <Navbar />
      <main className="page-wrapper"> {/* Added a wrapper for main content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/ict" element={<Ict />} />
          <Route path="/services/construction" element={<Construction />} />
          <Route path="/services/mining" element={<MiningPage />} />
          <Route path="/services/renewable" element={<Renewable />} />
          <Route path="/services/agriculture" element={<AgriculturePage />} />
          <Route path="/services/manufacturing" element={<Manufacturing />} />
          <Route path="/services/importExport" element={<ImportExport />} />
          <Route path="/services/media" element={<Media />} />
          <Route path="/services/education" element={<Education />} />
          <Route path="/services/aid" element={<Aid />} />
          <Route path="/services/ict/datacenter" element={<DataCenter />} />
          <Route path="/services/ict/cloud" element={<Cloud />} />
          <Route path="/services/ict/support" element={<Support />} />
          <Route path="/services/ict/collaboration" element={<Collaboration />} />
          <Route path="/services/ict/consulting" element={<Consulting />} />
          <Route path="/services/ict/building" element={<Building />} />
          <Route path="/services/ict/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/ict/network" element={<Network />} />
          <Route path="/services/ict/smart-city" element={<SmartCity />} />
          <Route path="/services/ict/software" element={<Software />} />
          <Route path="/more-about-michuux" element={<HomePage />} /> 
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;