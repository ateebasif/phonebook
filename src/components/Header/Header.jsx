import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ description }) => <h1>{description}</h1>;

Header.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Header;
