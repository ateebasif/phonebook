import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const Contact = ({ name }) => <ListGroup.Item>{name}</ListGroup.Item>;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Contact;
