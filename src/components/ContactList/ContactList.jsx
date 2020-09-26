import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Contact from './Contact';
import { contactSchema } from '../../models/Contact';

const ContactList = ({ contactList, selectContact }) => (
  <Jumbotron>
    <ListGroup>
      {contactList.map((contact, index) => (
        <Contact key={index} contact={contact} selectContact={selectContact} />
      ))}
    </ListGroup>
  </Jumbotron>
);

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.shape(contactSchema).isRequired)
    .isRequired,

  selectContact: PropTypes.func,
};

export default ContactList;
