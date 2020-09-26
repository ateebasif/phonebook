import PropTypes from 'prop-types';

export const contactSchema = {
  _id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
};
