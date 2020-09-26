import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import AddContactContainer from './containers/AddContactForm';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>Phonebook App</h1>
            <Navigation />
            <Route exact path="/" component={Home} />
            <Route exact path="/add-contact" component={AddContactContainer} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
