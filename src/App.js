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
          <Col sm={12} md={12} lg={12} className="d-flex justify-content-center">
            <div className='about'>
              <p className='text'>The Duke offers modern amenities that provide a one of a kind event experience. Inspired by the raw music lifestyle of New York City of the 20th century, The Duke features a custom leather fringe chandelier, lighting and art accents throughout, and a tiled concert stage that looks out over East Main St. and Parcel 5. </p>
              <p className='text'>The Duke offers a curated guest experience based on decades of experience. When you book The Duke, you will be guaranteed an individually exclusive experience of food, wine, and cocktails, while immersing yourself in the creative culture of art and music of New York City.
Food and beverage is managed by the hospitality team that owns and manages Avvino, La Bola, and Frenchman Street.</p>
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
  <Col sm={12} md={6} className="d-flex justify-content-center">
    <div className="event-space text-center">
      <img src={require("./EventSpaceSim.jpg")} alt="theDuke eventspace" />
    </div>
  </Col>
  <Col xs={12} md={6} className="d-flex justify-content-center">
    <div className="google-maps-wrapper">
      <div className="google-maps">
        <Map />
      </div>
    </div>
  </Col>
</Row>

    </div>
  );
}

export default App;
