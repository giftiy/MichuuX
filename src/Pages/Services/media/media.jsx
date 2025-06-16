import React, { useState } from 'react';
import './media.css'; 
import useScrollAnimation from '../../../hooks/useScrollAnimation'; // Make sure this path is correct
import whyUsImageUrl from '../../../assets/mining/media2.jpg' ;
// --- DATA: All your Media content, structured for tabs ---

const heroImageUrl = 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80';


const servicesData = [
    { 
        tabTitle: 'FM Radio', 
        icon: 'fa-solid fa-tower-broadcast',
        items: ['Full-service radio production & broadcasting', 'Radio station setup & operational support', 'Advertising & content creation for radio spots', 'Audience engagement strategies'] 
    },
    { 
        tabTitle: 'TV Broadcasting', 
        icon: 'fa-solid fa-tv',
        items: ['End-to-end TV production services', 'Multi-camera setups, live streaming, & editing', 'TV station management & broadcasting solutions', 'Content creation from script to post-production'] 
    },
    { 
        tabTitle: 'Digital Media', 
        icon: 'fa-solid fa-share-nodes',
        items: ['Social media content strategy & management', 'Video production for web & advertising', 'Podcasting, blogging, & influencer marketing', 'Campaigns for brand storytelling'] 
    },
    { 
        tabTitle: 'Event Management', 
        icon: 'fa-solid fa-calendar-check',
        items: ['Full-service event planning & management', 'Event logistics & virtual event production', 'Event marketing & media coverage', 'Live streaming for global audiences'] 
    },
    { 
        tabTitle: 'Digital Marketing', 
        icon: 'fa-solid fa-bullhorn',
        items: ['Comprehensive SEM, SEO, & PPC advertising', 'Social media marketing & influencer partnerships', 'Targeted email campaigns & automation', 'Data-driven campaigns with real-time analytics'] 
    }
];

const whyUsData = [
    { icon: 'fa-solid fa-blender-phone', text: 'Expertise in both traditional and digital media' },
    { icon: 'fa-solid fa-lightbulb', text: 'Tailored solutions for your brand’s unique media needs' },
    { icon: 'fa-solid fa-handshake-angle', text: 'Comprehensive services from production to promotion' },
    { icon: 'fa-solid fa-users', text: 'Focus on engagement and audience connection' }
];

// --- The Main Page Component ---
const Media = () => {
    const { ref: heroRef, inView: heroInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    const { ref: servicesRef, inView: servicesInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });
    const { ref: whyUsRef, inView: whyUsInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    
    // State to keep track of the active tab (starts with the first tab, index 0)
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="media-page">
            <section className="media-hero" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="hero-overlay"></div>
                <div ref={heroRef} className={`hero-content animate-on-scroll fade-in-up ${heroInView ? 'is-visible' : ''}`}>
                    <h1 className="hero-title">Michuu Media</h1>
                    <p className="hero-subtitle">
                        Leveraging the power of media to connect brands, people, and ideas. We offer innovative solutions to grow your digital presence, engage audiences, and deliver impactful media experiences.
                    </p>
                </div>
            </section>

            <section ref={servicesRef} className="services-section">
                <div className={`section-header animate-on-scroll fade-in-down ${servicesInView ? 'is-visible' : ''}`}>
                    <h2 className="section-title">What We Offer</h2>
                </div>
                
                {/* Tab Buttons */}
                <div className="tab-buttons-container">
                    {servicesData.map((service, index) => (
                        <button
                            key={index}
                            className={`tab-button ${activeTab === index ? 'active' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            <i className={service.icon}></i>
                            <span>{service.tabTitle}</span>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="tab-content-container">
                    {/* The `key={activeTab}` is important! It tells React to re-animate when the tab changes. */}
                    <ul key={activeTab} className="tab-content-list animate-on-scroll fade-in-up is-visible">
                        {servicesData[activeTab].items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section ref={whyUsRef} className="why-us-section">
                <div className="why-us-content">
                    <div className={`why-us-image-container animate-on-scroll fade-in-left ${whyUsInView ? 'is-visible' : ''}`}>
                        <img src={whyUsImageUrl} alt="Media team collaborating" />
                    </div>
                    <div className={`why-us-list-container animate-on-scroll fade-in-right ${whyUsInView ? 'is-visible' : ''}`}>
                        <h2 className="section-title">Why Choose MichuuX Media?</h2>
                        {whyUsData.map((item, index) => (
                            <div key={index} className="why-us-item">
                                <i className={item.icon}></i>
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Media;