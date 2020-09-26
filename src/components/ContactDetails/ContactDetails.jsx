import React from 'react';
import PropTypes from 'prop-types';
import { contactSchema } from '../../models/Contact';

const ContactDetails = ({ contact }) => {
  console.log('contact details component', contact);
  return (
    <div>
      <h1>Contact Details </h1>
      {!contact ? 'Not contact is selected' : contact.name}
    </div>
  );
};

ContactDetails.propTypes = {
  contact: PropTypes.shape(contactSchema),
};

export default ContactDetails;
