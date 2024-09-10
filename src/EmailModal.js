import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

const EmailModal = ({ show, handleClose, handleSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    dates: '',
    partySize: '',
    inquiry: '',
  });

  const [error, setError] = useState(''); // State to manage error messages

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error when user starts typing
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.number || !formData.dates || !formData.partySize || !formData.inquiry) {
      setError('All fields are required. Please fill in all fields before submitting.');
      return;
    }

    try {
      // Make a POST request to the send-email API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),  // Send the form data as JSON
      });

      if (response.ok) {
        // If the email is successfully sent, close the modal and show the success screen
        handleClose(); // Close the modal
        handleSuccess(); // Show success screen
        setFormData({  // Reset the form data
          name: '',
          email: '',
          dates: '',
          partySize: '',
          inquiry: '',
        });
      } else {
        console.error('Error sending email:', response.statusText);
        setError('There was an issue sending your inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError('There was an error sending your inquiry. Please check your connection and try again.');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Send an Inquiry</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Display error message if there is one */}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formNumber">
            <Form.Label>Phone number:</Form.Label>
            <Form.Control
              type="text"
              name="number"
              value={formData.number}
              placeholder="Enter your phone number"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formDate">
            <Form.Label>Date of event(s):</Form.Label>
            <Form.Control
              type="text"
              name="dates"
              value={formData.dates}
              placeholder="Enter the date for the inquiry"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPartySize">
            <Form.Label>Party size:</Form.Label>
            <Form.Control
              type="text"
              name="partySize"
              value={formData.partySize}
              placeholder="Size of your party"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formInquiry">
            <Form.Label>Inquiry:</Form.Label>
            <Form.Control
              as="textarea"
              name="inquiry"
              value={formData.inquiry}
              placeholder="Enter your inquiry"
              onChange={handleChange}
              rows={8} 
              style={{ resize: 'none', overflowY: 'auto' }} 
              required
            />
          </Form.Group>

          <div className="d-flex justify-content-center mt-3">
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EmailModal;


