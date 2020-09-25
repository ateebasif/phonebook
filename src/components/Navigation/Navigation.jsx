import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <Link className="btn btn-primary" to="/">
      Conatact List
    </Link>
    <Link className="btn btn-secondary" to="/new-contact">
      + Add New Contact
    </Link>
  </div>
);
