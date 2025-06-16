import React from 'react';

import './mining.css'; 
import useScrollAnimation from '../../../hooks/useScrollAnimation';

// === STEP 1: IMPORTING ALL 8 OF YOUR LOCAL IMAGES ===
// The path '../../../' goes up from '.../mining/' to '.../Services/' to '/Pages/' to '/src/'
// This path must be correct for your project structure.

import heroImage from '../../../assets/mining/mining1.png';
import explorationImage from '../../../assets/mining/mining2.png';
import operationsImage from '../../../assets/mining/mining3.png';
import processingImage from '../../../assets/mining/mining4.png';
import sustainabilityImage from '../../../assets/mining/mining5.png';
import technologyImage from '../../../assets/mining/mining6.png';
import safetyImage from '../../../assets/mining/mining7.png';
import consultingImage from '../../../assets/mining/mining8.png';
import whyUsImage from '../../../assets/mining/mining9.jpg'; 


// === STEP 2: YOUR COMPLETE DATA USING THE IMPORTED IMAGES ===
const heroImageUrl = heroImage;

const servicesData = [
    {
        icon: 'fa-solid fa-magnifying-glass-chart',
        title: 'Exploration & Resource Assessment',
        image: explorationImage, // Use the variable, not a string
        items: ['Geophysical surveys & exploration drilling', 'Geological mapping & data analysis', 'Feasibility studies & EIAs']
    },
    {
        icon: 'fa-solid fa-truck-monster',
        title: 'Mining Operations & Extraction',
        image: operationsImage, // Use the variable
        items: ['Drilling, blasting, and excavation', 'Material handling and transportation', 'Tailings and waste management']
    },
    {
        icon: 'fa-solid fa-flask-vial',
        title: 'Mineral Processing & Refining',
        image: processingImage, // Use the variable
        items: ['Crushing, grinding, and separation', 'Precious and base metal extraction', 'Ore beneficiation and value-add']
    },
    {
        icon: 'fa-solid fa-leaf',
        title: 'Sustainability & Environmental Solutions',
        image: sustainabilityImage, // Use the variable
        items: ['Environmental impact monitoring', 'Water management & reclamation plans', 'Renewable energy integration']
    },
    {
        icon: 'fa-solid fa-robot',
        title: 'Mining Equipment & Technology',
        image: technologyImage, // Use the variable
        items: ['Automation and IoT systems', 'Predictive maintenance solutions', 'Drone and satellite surveying']
    },
    {
        icon: 'fa-solid fa-helmet-safety',
        title: 'Mining Safety & Compliance',
        image: safetyImage, // Use the variable
        items: ['Safety audits, risk assessments, and compliance monitoring', 'Emergency response plans and disaster recovery', 'Health and safety training for staff']
    },
    {
        icon: 'fa-solid fa-clipboard-check',
        title: 'Consulting & Project Management',
        image: consultingImage, // Use the variable
        items: ['Full-cycle mining project management', 'Feasibility studies, budgeting, and timeline management', 'Stakeholder engagement and community relations']
    }
];

const whyUsData = [
    'Multi-disciplinary expertise across sectors',
    'Emphasis on innovation and smart technology',
    'Strong project management and quality assurance',
    'Commitment to sustainable and cost-effective building'
];

// --- Sub-Component for a single service row (Keeps main component clean) ---
const MiningFeatureRow = ({ service, index }) => {
    const { ref, inView } = useScrollAnimation({ triggerOnce: true, threshold: 0.25 });
    const isReversed = index % 2 !== 0; // Alternates layout for each row

    return (
        <div ref={ref} className={`mining-feature-row ${isReversed ? 'reversed' : ''}`}>
            <div className={`feature-image-container animate-on-scroll ${inView ? 'is-visible' : ''} ${isReversed ? 'fade-in-left' : 'fade-in-right'}`}>
                <img src={service.image} alt={service.title} />
            </div>
            <div className={`feature-content animate-on-scroll ${inView ? 'is-visible' : ''} ${isReversed ? 'fade-in-right' : 'fade-in-left'}`}>
                <div className="feature-icon"><i className={service.icon}></i></div>
                <h3 className="feature-title">{service.title}</h3>
                <ul className="feature-items-list">
                    {service.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


// --- The Main Page Component ---
const Mining = () => {
    const { ref: heroRef, inView: heroInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    const { ref: whyUsRef, inView: whyUsInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });

    return (
        <div className="mining-page">
            <section
                className="mining-hero"
                style={{ backgroundImage: `url(${heroImageUrl})` }}
            >
                <div className="hero-overlay"></div>
                <div ref={heroRef} className={`hero-content animate-on-scroll fade-in-up ${heroInView ? 'is-visible' : ''}`}>
                    <h1 className="hero-title">Michuu Mining</h1>
                    <p className="hero-subtitle">
                        At MichuuX, we bring a forward-thinking approach to the mining industry. We specialize in providing innovative, sustainable, and efficient mining solutions that maximize productivity while minimizing environmental impact.
                    </p>
                 
                </div>
            </section>

            <section className="mining-services-list-section">
                <div className="section-header">
                     <h2 className="section-title py-5">What We Offer</h2>
                </div>
                <div className="features-wrapper">
                    {servicesData.map((service, index) => (
                        <MiningFeatureRow key={index} service={service} index={index} />
                    ))}
                </div>
            </section>
            
  {/* === STEP 2: RESTRUCTURE THE "WHY US" SECTION JSX === */}
            <section ref={whyUsRef} className="why-us-section">
                <div className={`section-header animate-on-scroll fade-in-down ${whyUsInView ? 'is-visible' : ''}`}>
                    <h2 className="section-title py-5">Why MichuuX Mining?</h2>
                </div>
                {/* New container for the 50/50 split */}
                <div className="why-us-content">
                    {/* Image on the left */}
                    <div className={`why-us-image-container animate-on-scroll fade-in-left ${whyUsInView ? 'is-visible' : ''}`}>
                        <img src={whyUsImage} alt="Modern architectural design" />
                    </div>
                    {/* Your list of items on the right */}
                    <div className={`why-us-list-container animate-on-scroll fade-in-right ${whyUsInView ? 'is-visible' : ''}`}>
                        {whyUsData.map((item, index) => (
                            <div key={index} className="why-us-item">
                                <i className="fa-solid fa-shield-halved"></i>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mining;