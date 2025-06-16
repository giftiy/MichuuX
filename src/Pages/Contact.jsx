// src/Pages/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Ensure emailjs-com is installed
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ submitted: false, submitting: false, info: { error: false, msg: null } });

  const { ref: sectionRef, inView: sectionInView } = useScrollAnimation({ threshold: 0.05 });
  const { ref: formRef, inView: formInView } = useScrollAnimation({ threshold: 0.1 });
  const { ref: detailsRef, inView: detailsInView } = useScrollAnimation({ threshold: 0.1 });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (status.info.msg) {
      setStatus({ submitted: false, submitting: false, info: { error: false, msg: null } });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, info: { error: false, msg: null } });

    // --- START OF EMAILJS INTEGRATION ---

    // Using the IDs you provided.
    const serviceID = 'service_6sf5gch';
    const templateID = 'template_l5g63hg';
    // IMPORTANT: Replace with your actual Public Key from your EmailJS account.
    const publicKey = '-VpZzql9CtT7YvzmH'; 

    // This object's keys MUST match the variables in your EmailJS template.
    // {{from_name}}, {{email_id}}, {{message}}
    const templateParams = {
      from_name: formData.name,   // Maps form 'name' to template 'from_name'
      email_id: formData.email,   // Maps form 'email' to template 'email_id'
      message: formData.message,  // Maps form 'message' to template 'message'
      // Note: Your template doesn't use a 'subject', so we don't need to send formData.subject here.
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus({ submitted: true, submitting: false, info: { error: false, msg: 'Message sent successfully! Thank you.' } });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        const errorMessage = err.text || 'An unknown error occurred.';
        setStatus({ submitted: true, submitting: false, info: { error: true, msg: `Failed to send message. Please try again. (${errorMessage})` } });
      });
      
    // --- END OF EMAILJS INTEGRATION ---
  };

  return (
    <section id="contact" ref={sectionRef} className="py-5 bg-light contact-section page-section">
      <Container>
        <div className={`title-holder text-center mb-5 animate-on-scroll fade-in-down ${sectionInView ? 'is-visible' : ''}`}>
          <h2 className="fw-bold">Contact Us</h2>
        </div>

        <Row className="g-4 g-lg-5 justify-content-center">
          <Col lg={6} md={6} ref={formRef} className={`animate-on-scroll ${formInView ? 'fade-in-left is-visible' : 'fade-in-left'}`}>
            <div className="contact-form-wrapper p-4 p-lg-5 bg-white shadow-sm rounded">
              <h4 className="mb-4 fw-semibold">Send Us a Message</h4>
              <Form onSubmit={handleFormSubmit} noValidate>
                {status.info.msg && (
                  <Alert variant={status.info.error ? 'danger' : 'success'} dismissible onClose={() => setStatus(prev => ({ ...prev, info: { error: false, msg: null } }))}>
                    {status.info.msg}
                  </Alert>
                )}
                {/* The form fields 'name', 'email', 'subject' remain the same in the UI */}
                {['name', 'email', 'subject'].map((field, idx) => (
                  <Form.Group key={field} className={`mb-3 animate-on-scroll fade-in-up ${formInView ? 'is-visible' : ''}`} style={{transitionDelay: formInView ? `${idx * 0.1}s` : '0s'}}>
                    <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)} <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      placeholder={`Your ${field === 'name' ? 'Full Name' : field === 'email' ? 'Email Address' : 'Inquiry Subject'}`}
                      value={formData[field]}
                      onChange={handleInputChange}
                      required
                      disabled={status.submitting}
                    />
                  </Form.Group>
                ))}
                <Form.Group className={`mb-4 animate-on-scroll fade-in-up ${formInView ? 'is-visible' : ''}`} style={{transitionDelay: formInView ? '0.3s' : '0s'}}>
                  <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                  <Form.Control as="textarea" name="message" rows={5} placeholder="Please enter your message here..." value={formData.message} onChange={handleInputChange} required disabled={status.submitting} />
                </Form.Group>
                <div className={`d-grid animate-on-scroll fade-in-up ${formInView ? 'is-visible' : ''}`} style={{transitionDelay: formInView ? '0.4s' : '0s'}}>
                  <Button variant="primary" type="submit" disabled={status.submitting} size="lg" className="btn">
                    {status.submitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>

          <Col lg={5} md={6} ref={detailsRef} className={`animate-on-scroll ${detailsInView ? 'fade-in-right is-visible' : 'fade-in-right'}`}>
            <div className="contact-details-wrapper p-4 p-lg-5 bg-white shadow-sm rounded h-100">
              <h4 className="mb-4 fw-semibold">Get in Touch</h4>
              <div className={`contact-map mb-4 animate-on-scroll zoom-in ${detailsInView ? 'is-visible' : ''}`} style={{transitionDelay: detailsInView ? '0.1s' : '0s'}}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.23345840993!2d38.69009341640624!3d9.0228361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1678886600000!5m2!1sen!2sus"
                  width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office Location Map - Addis Ababa">
                </iframe>
              </div>
              <div className="contact-details">
                {[
                  { icon: faMapMarkerAlt, text: "Addis Ababa, Ethiopia", type: "text", delay: "0.2s" },
                  { icon: faEnvelope, text: "info@michuux.com", href: "mailto:info@yourcompany.com", type: "link", delay: "0.3s" },
                  { icon: faPhone, text: "+251 900 000 000", href: "tel:+251900000000", type: "link", delay: "0.4s" }
                ].map(item => (
                  <div key={item.text} className={`detail-item mb-3 animate-on-scroll fade-in-up ${detailsInView ? 'is-visible' : ''}`} style={{transitionDelay: detailsInView ? item.delay : '0s'}}>
                    <span className="detail-icon"><FontAwesomeIcon icon={item.icon} /></span>
                    <span className="detail-text">
                      {item.type === "link" ? <a href={item.href}>{item.text}</a> : item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;