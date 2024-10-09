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
          <img src={require("./TheDukeGold.png")} alt="theDuke Logo"></img>
        </div>
      </Row>
      <div>
        <Row>
          <Col sm={12} md={12} lg={12} className="d-flex justify-content-center">
            <div className='about'>
              <p className='text'>The Duke offers modern amenities in a unique and historic location in downtown Rochester, NY. The Aesthetic is inspired by the raw music lifestyle of New York City in the late 20 th century. The Duke features a custom leather fringe chandelier, bold lighting and art accents throughout, and a tiled concert stage that looks out over East Main Street and Parcel 5. </p>
              <p className='text'>The Duke offers a curated guest experience enhanced by decades of hospitality and event expertise from the team that owns Avvino, La Bola &amp; Frenchman Street. When you book The Duke, you will be guaranteed an exclusive experience of food, wine, and cocktails, while immersing yourself in a creative one-of-a-kind venue.</p>
              <Button variant="secondary" onClick={handleShow}>Send an Inquiry</Button>
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
      <Row>
    <div className="event-space text-center">
      <img src={require("./tempPhoto.jpg")} alt="theDuke eventspace" />
    </div>
    </Row>
 
    <Row>
    <div className="google-maps-wrapper">
      <div className="google-maps">
        <Map />
      </div>
    </div>
    </Row>
  
</Row>

    </div>
  );
}

export default App;
