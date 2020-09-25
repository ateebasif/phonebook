import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Contact from './Contact';

const ContactList = ({ contactList }) => (
  <Jumbotron>
    <ListGroup>
      {contactList.map((contact, index) => (
        <Contact key={index} {...contact} />
      ))}
    </ListGroup>
  </Jumbotron>
);

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      profilePicture: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;
