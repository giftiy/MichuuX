import React from 'react';

import './cybersecurity.css'; 
import useScrollAnimation from '../../../hooks/useScrollAnimation'; // Make sure this path is correct

// --- DATA: All your Cybersecurity content ---

const heroImageUrl = 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80';

const servicesData = [
    { 
        icon: 'fa-solid fa-fire-wall', 
        title: 'Firewalls (NGFW)', 
        description: 'Advanced firewall protection with application control and integrated threat intelligence to secure your network perimeter.' 
    },
    { 
        icon: 'fa-solid fa-user-secret', 
        title: 'Intrusion Prevention and Detection (IPS/IDS)', 
        description: 'Real-time threat detection and automated blocking to prevent malicious attacks before they can cause damage.' 
    },
    { 
        icon: 'fa-solid fa-window-maximize', 
        title: 'Web Application Firewall (WAF)', 
        description: 'Protecting your web applications from common vulnerabilities and targeted attacks like SQL injection and XSS.' 
    },
    { 
        icon: 'fa-solid fa-desktop', 
        title: 'Endpoint Security (EPP/EDR/XDR)', 
        description: 'Comprehensive protection for all devices with antivirus, anti-malware, and advanced threat detection and response.' 
    },
    { 
        icon: 'fa-solid fa-database', 
        title: 'Data Loss Prevention (DLP)', 
        description: 'Safeguarding your most sensitive data from unauthorized access, exfiltration, and accidental leakage.' 
    },
    { 
        icon: 'fa-solid fa-chart-line', 
        title: 'Security Monitoring & SIEM', 
        description: '24/7 real-time monitoring and security event analysis to detect and respond to threats with speed and precision.' 
    },
    { 
        icon: 'fa-solid fa-certificate', 
        title: 'Compliance & Risk Management', 
        description: 'Helping your organization achieve and maintain compliance with industry standards like ISO, GDPR, and NIST.' 
    }
];

// --- The Main Page Component ---
const Cybersecurity = () => {
    // === STEP 1: ADD ANIMATION HOOKS FOR EACH SECTION ===
    const { ref: heroRef, inView: heroInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    const { ref: servicesRef, inView: servicesInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });
   

    return (
        <div className="cybersecurity-page">
            <section className="cyber-hero" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="hero-overlay"></div>
                {/* === STEP 2: CONNECT ANIMATION TO JSX === */}
                <div ref={heroRef} className={`hero-content animate-on-scroll fade-in-up ${heroInView ? 'is-visible' : ''}`}>
                    <h1 className="hero-title">Cybersecurity</h1>
                    <p className="hero-subtitle">
                        We provide comprehensive cybersecurity solutions to protect your data, networks, and endpoints from evolving threats, ensuring your business remains secure, compliant, and resilient.
                    </p>
                </div>
            </section>

            <section ref={servicesRef} className="services-section">
                <div className={`section-header animate-on-scroll fade-in-down ${servicesInView ? 'is-visible' : ''}`}>
                    <h2 className="section-title">Key Cybersecurity Solutions</h2>
                </div>
                <div className="services-list-container">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            // Add animation classes to each card
                            className={`service-panel animate-on-scroll fade-in-up ${servicesInView ? 'is-visible' : ''}`}
                            style={{ transitionDelay: servicesInView ? `${index * 0.05}s` : '0s' }}
                        >
                            <div className="panel-icon"><i className={service.icon}></i></div>
                            <div className="panel-content">
                                <h3 className="panel-title">{service.title}</h3>
                                <p className="panel-description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
        
        </div>
    );
};

export default Cybersecurity;