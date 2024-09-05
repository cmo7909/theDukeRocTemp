import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EmailModal = ({ show, handleClose, handleSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dates: '',
    partySize: '',
    inquiry: '',
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
     
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),  
      });
  
      if (response.ok) {
        
        handleClose(); 
        handleSuccess(); 
        setFormData({  
          name: '',
          email: '',
          dates: '',
          partySize: '',
          inquiry: '',
        });
      } else {
        console.error('Error sending email:', response.statusText);
        alert('There was an issue sending your inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your inquiry. Please check your connection and try again.');
    }
  };
  

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Send an Inquiry</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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

          <Form.Group controlId="formDate">
            <Form.Label>Date of Inquiry:</Form.Label>
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
            <Form.Label>Party Size:</Form.Label>
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

