import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
import { contactSchema } from '../../models/Contact';
import { Link } from 'react-router-dom';

const ContactInfo = ({ contact }) => (
  <Container>
    <Row>
      <Col sm={3}>
        <Image src={contact.profilePicture} thumbnail />
      </Col>
      <Col sm={9} className="contact-basic-info">
        <label>Name: {contact.name}</label>
        <label>Phone: {contact.phoneNumber}</label>
        <label>Address: {contact.address}</label>
      </Col>
    </Row>
    <br />
    <br />
    <br />
    <Row>
      <Col>
        <p className="contact-bio">{contact.bio}</p>
      </Col>
    </Row>
  </Container>
);

const ContactDetails = ({ contact }) => {
  return (
    <div className="contact-details-container" data-test="contact_details">
      <Jumbotron className="contact-details-heading text-center">
        <h2 className="text-center">Contact Details </h2>
      </Jumbotron>

      <Container
        className="contact-details"
        // data-test="contact_details_component"
      >
        {!contact ? (
          <h3 className="text-white">Not contact is selected</h3>
        ) : (
          <ContactInfo contact={contact} />
        )}
      </Container>

      <Row className="bottom-actions">
        <Col xs={12} className="text-right">
          <Link
            className="btn btn-secondary orange square-button"
            to="/add-contact"
          >
            + Add New Contact
          </Link>
        </Col>
      </Row>
    </div>
  );
};

ContactDetails.propTypes = {
  contact: PropTypes.shape(contactSchema),
};

ContactInfo.propTypes = {
  contact: PropTypes.shape(contactSchema).isRequired,
};

export default ContactDetails;
