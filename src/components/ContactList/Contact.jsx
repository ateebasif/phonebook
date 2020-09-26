import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import { contactSchema } from '../../models/Contact';

const Contact = ({ contact, selectContact }) => {
  const onClick = () => {
    selectContact(contact._id);
  };
  return <ListGroup.Item onClick={onClick}>{contact.name}</ListGroup.Item>;
};

Contact.propTypes = {
  contact: PropTypes.shape(contactSchema),
  selectContact: PropTypes.func,
};

export default Contact;
