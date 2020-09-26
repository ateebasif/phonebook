import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Contact from './Contact';
import { contactSchema } from '../../models/Contact';

const ContactList = ({ contactList, selectContact }) => (
  <ListGroup className="contact-list">
    {contactList.map((contact, index) => (
      <Contact key={index} contact={contact} selectContact={selectContact} />
    ))}
  </ListGroup>
);

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.shape(contactSchema).isRequired)
    .isRequired,

  selectContact: PropTypes.func,
};

export default ContactList;
