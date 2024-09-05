import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './Map';
import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import EmailModal from './EmailModal';
import SuccessScreen from './SuccessScreen';  // Import the SuccessScreen component

function App() {
  const [showModal, setShowModal] = useState(false); // State for email modal visibility
  const [showSuccess, setShowSuccess] = useState(false); // State for success screen visibility

  const handleShow = () => setShowModal(true); // Show the email modal
  const handleClose = () => setShowModal(false); // Close the email modal

  const handleSuccess = () => {
    setShowModal(false); // Close the email modal
    setShowSuccess(true); // Show the success screen
  };

  const handleSuccessClose = () => setShowSuccess(false); // Close the success screen

  return (
    <div className="App">
      <Row>
        <div className="logo">
          <img src={require("./TheDukeLogo_Decal.png")} alt="theDuke Logo"></img>
        </div>
      </Row>
      <div>
        <Row>
          <Col sm={12} md={6} className="d-flex justify-content-end">
            <div className='about'>
              <p className='text'>The Duke is a newly renovated event space inside of the Historic Sibley Square. Located at 240 E. Main Street, The Duke is centrally located in the heart of Rochester's Center City. A cultural hub of food, arts, and entertainment The Duke offers modern amenities that provide a one of a kind event experience.</p>
              <Button variant="secondary" onClick={handleShow}>Send an Inquiry</Button>
            </div>
          </Col>
          <Col sm={12} md={6} className="d-flex justify-content-start">
            <div className='event-space text-start'>
              <img src={require("./EventSpaceSim.jpg")} alt='theDuke eventspace'></img>
            </div>
          </Col>
        </Row>

        {/* Email Modal */}
        <EmailModal
          show={showModal}
          handleClose={handleClose}
          handleSuccess={handleSuccess} // Pass handleSuccess to handle successful email submission
        />

        {/* Success Screen Modal */}
        <SuccessScreen
          show={showSuccess}
          handleClose={handleSuccessClose} // Handle closing the success screen
        />
      </div>

      <Row className="d-flex justify-content-center align-items-center">
        <Col xs={12} md={8} className="d-flex justify-content-center">
          <div className='google-maps'>
            <Map />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
