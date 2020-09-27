import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Route, Link } from 'react-router-dom';

import AddContactContainer from './containers/AddContactForm';
import Home from './pages/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row" data-test="row">
          <Col xs={12}>
            <Link className="" to="/">
              <h1 id="header">Phonebook App</h1>
            </Link>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-contact" component={AddContactContainer} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
