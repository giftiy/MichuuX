import React from 'react';

import './importExport.css'; 
import useScrollAnimation from '../../../hooks/useScrollAnimation'; // Make sure this path is correct

// --- DATA: All your Import & Export content ---

import heroImageUrl from '../../../assets/mining/export.jpg';

const processData = [
    { icon: 'fa-solid fa-search-location', title: 'Sourcing & Procurement', description: 'Identifying and verifying high-quality suppliers and raw materials from across the globe to meet your specific needs.' },
    { icon: 'fa-solid fa-truck-fast', title: 'Logistics & Freight', description: 'Managing air, sea, and land freight with optimized routing and tracking for timely and cost-effective delivery.' },
    { icon: 'fa-solid fa-file-shield', title: 'Customs & Compliance', description: 'Navigating complex international trade regulations and handling all customs documentation to ensure smooth clearance.' },
    { icon: 'fa-solid fa-warehouse', title: 'Warehousing & Distribution', description: 'Providing secure warehousing and strategic distribution services to get your products to market efficiently.' }
];

const whyUsData = [
    { icon: 'fa-solid fa-globe', title: 'Global Network', description: 'Extensive network of partners ensuring reliable sourcing and market access worldwide.' },
    { icon: 'fa-solid fa-handshake-angle', title: 'End-to-End Solutions', description: 'We manage every step of the process, from the factory floor to the final destination.' },
    { icon: 'fa-solid fa-clipboard-check', title: 'Compliance Expertise', description: 'Our deep knowledge of trade regulations minimizes risks, delays, and unexpected costs.' }
];

// --- The Main Page Component ---
const ImportExport = () => {
    const { ref: heroRef, inView: heroInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    const { ref: processRef, inView: processInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });
    const { ref: whyUsRef, inView: whyUsInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className="import-export-page">
            <section className="import-export-hero" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="hero-overlay"></div>
                <div ref={heroRef} className={`hero-content animate-on-scroll fade-in-up ${heroInView ? 'is-visible' : ''}`}>
                    <h1 className="hero-title">Michuu Import & Export</h1>
                    <p className="hero-subtitle">
                        We facilitate global trade by sourcing, supplying, and exporting high-quality goods and raw materials with end-to-end logistics and market access strategies.
                    </p>
                </div>
            </section>

            <section ref={processRef} className="process-section">
                <div className={`section-header animate-on-scroll fade-in-down ${processInView ? 'is-visible' : ''}`}>
                    <h2 className="section-title">Our Process</h2>
                </div>
                <div className="process-timeline-container">
                    {processData.map((step, index) => (
                        <div
                            key={index}
                            className={`process-step ${index % 2 === 0 ? 'left' : 'right'} animate-on-scroll ${processInView ? 'is-visible' : ''} ${index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'}`}
                            style={{ transitionDelay: processInView ? `${index * 0.1}s` : '0s' }}
                        >
                            <div className="step-icon">
                                <i className={step.icon}></i>
                            </div>
                            <div className="step-content">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section ref={whyUsRef} className="why-us-section">
                <div className={`section-header animate-on-scroll fade-in-down ${whyUsInView ? 'is-visible' : ''}`}>
                    <h2 className="section-title">Why Partner with Us?</h2>
                </div>
                <div className="why-us-grid">
                    {whyUsData.map((benefit, index) => (
                        <div
                            key={index}
                            className={`benefit-card animate-on-scroll fade-in-up ${whyUsInView ? 'is-visible' : ''}`}
                            style={{ transitionDelay: whyUsInView ? `${index * 0.1}s` : '0s' }}
                        >
                            <div className="benefit-icon"><i className={benefit.icon}></i></div>
                            <h3 className="benefit-title">{benefit.title}</h3>
                            <p className="benefit-description">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>

             
        </div>
    );
};

export default ImportExport;