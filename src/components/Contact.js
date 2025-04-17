import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Ensure this path is correct and contains your theme styles

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (status.submitted || status.info.msg) {
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true, info: { error: false, msg: null } }));

    // --- START: REPLACE WITH YOUR ACTUAL SUBMISSION LOGIC ---
    try {
      console.log("Submitting form data:", formData);

      // Simulate an asynchronous operation (e.g., API call)
      await new Promise(resolve => setTimeout(resolve, 1500)); // Wait 1.5 seconds

      // Simulate success or failure (replace with actual result check)
      const isSuccess = Math.random() > 0.3; // 70% chance of success for demo

      if (!isSuccess) {
        // Manually throw an error to simulate failure
        throw new Error('Simulated submission error.');
      }

      // If submission is successful:
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message sent successfully! Thank you.' },
      });
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form

    } catch (error) {
      // If submission fails:
      console.error("Submission failed:", error);
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: true, msg: `Failed to send message. Please try again. (${error.message})` },
      });
    }
    // --- END: REPLACE WITH YOUR ACTUAL SUBMISSION LOGIC ---
  };

  return (
    <section id="contact" className="py-5 bg-light contact-block">
      <Container>
        <div className="title-holder text-center mb-5">
            <h2 className="fw-bold">Contact Us</h2>
            <p className="subtitle text-muted">
            Have questions or want to discuss a project? Fill out the form below.
            </p>
        </div>

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Form onSubmit={handleFormSubmit} noValidate>
              {status.info.msg && (
                <Alert
                  variant={status.info.error ? 'danger' : 'success'}
                  dismissible
                  onClose={() => setStatus(prev => ({...prev, info: { error: false, msg: null }}))}
                >
                  {status.info.msg}
                </Alert>
              )}

              <Form.Group className="mb-3" controlId="contactFormName">
                <Form.Label>Name <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={status.submitting}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactFormEmail">
                <Form.Label>Email address <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={status.submitting}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactFormSubject">
                <Form.Label>Subject <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Subject of your inquiry"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  disabled={status.submitting}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="contactFormMessage">
                <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Please enter your message here..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={status.submitting}
                />
              </Form.Group>

              <div className="d-grid">
                <Button
                  variant="primary"
                  type="submit"
                  disabled={status.submitting}
                  size="lg"
                  className="btn" // Apply your custom theme styles (purple?)
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;