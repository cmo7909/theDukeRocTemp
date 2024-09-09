import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SuccessScreen = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header>
        <Modal.Title className="w-100 text-center">Email Sent</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center"> {/* Centering all text in the modal body */}
        <p>Your inquiry has been successfully sent!</p>
        <div className="d-flex justify-content-center">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SuccessScreen;


