import React from 'react';
import './collaboration.css'; 
import useScrollAnimation from '../../../hooks/useScrollAnimation'; // Make sure this path is correct

// --- DATA: All your Collaboration Tools content ---

const heroImageUrl = 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80';

const servicesData = [
    { icon: 'fa-solid fa-comments', title: 'Unified Communication Platforms', description: 'Integrating VoIP, chat, voice, and video conferencing into a single, seamless platform like Microsoft Teams or Zoom.' },
    { icon: 'fa-solid fa-envelope-open-text', title: 'Email and Productivity Suites', description: 'Deployment and expert management of professional email, calendars, and productivity apps for your entire organization.' },
    { icon: 'fa-solid fa-share-alt', title: 'File Sharing & Cloud Storage', description: 'Secure, real-time document sharing and collaboration with version control and access management.' },
    { icon: 'fa-solid fa-tasks', title: 'Project Management Tools', description: 'Streamlining teamwork and enhancing productivity with platforms like Asana, Trello, or Jira.' },
    { icon: 'fa-solid fa-users', title: 'Enterprise Social Networks', description: 'Building internal communication networks to enhance knowledge sharing, company culture, and employee engagement.' },
    { icon: 'fa-solid fa-shield-alt', title: 'Collaboration Security', description: 'Ensuring secure communication channels and protecting shared data with encryption, DLP, and compliance solutions.' },
    { icon: 'fa-solid fa-link', title: 'Integration & Customization', description: 'Connecting your collaboration tools with CRM, ERP, and other business systems for a truly seamless workflow.' }
];

// --- The Main Page Component ---
const Collaboration = () => {
    const { ref: heroRef, inView: heroInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    const { ref: servicesRef, inView: servicesInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="collaboration-page">
            <section className="collaboration-hero" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="hero-overlay"></div>
                <div ref={heroRef} className={`hero-content animate-on-scroll fade-in-up ${heroInView ? 'is-visible' : ''}`}>
                    <h1 className="hero-title">Collaboration Tools</h1>
                    <p className="hero-subtitle">
                        Empower your teams to work smarter, faster, and from anywhere with integrated platforms that enhance communication, file sharing, and project management.
                    </p>
                </div>
            </section>

            <section ref={servicesRef} className="timeline-section">
                <div className={`section-header animate-on-scroll fade-in-down ${servicesInView ? 'is-visible' : ''}`}>
                    <h2 className="section-title">Our Collaboration Solutions</h2>
                </div>
                <div className="timeline-container">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} animate-on-scroll ${servicesInView ? 'is-visible' : ''} ${index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'}`}
                            style={{ transitionDelay: servicesInView ? `${index * 0.1}s` : '0s' }}
                        >
                            <div className="timeline-content">
                                <div className="timeline-icon"><i className={service.icon}></i></div>
                                <h3 className="timeline-title">{service.title}</h3>
                                <p className="timeline-description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Collaboration;