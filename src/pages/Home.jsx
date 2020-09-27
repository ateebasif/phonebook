import React from 'react';
import ContactDetailsContainer from '../containers/ContactDetails';
import ContactListContainer from '../containers/ContactListContainer';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Home() {
  return (
    <div className="main-app-container" data-test="Home_phonebook">
      <Row className="no-gutters">
        <Col md={3}>
          <div className="side-list">
            <Jumbotron className="phone-book-title">
              <h1>Phone Book App</h1>
            </Jumbotron>
            <ContactListContainer />
          </div>
        </Col>
        <Col md={9}>
          <ContactDetailsContainer />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
