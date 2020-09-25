import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from './components/Header/Header';

import ContactListContainer from './containers/ContactListContainer';
import ContactList from './components/ContactList/ContactList';
import Navigation from './components/Navigation/Navigation';
import { Route, Router } from 'react-router-dom';
import SubmitValidationForm from './components/Form/AddContactForm';
import AddContactContainer from './containers/AddContactForm';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>Phonebook App</h1>
            <Navigation />
            <Route exact path="/" component={ContactListContainer} />
            <Route exact path="/add-contact" component={AddContactContainer} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

{
  /* <Row>
          <Header description={'hello'} />
</Row> */
}
