import React from 'react';
import ContactDetailsContainer from '../containers/ContactDetails';
import ContactListContainer from '../containers/ContactListContainer';

function Home() {
  return (
    <div>
      <ContactListContainer />
      <ContactDetailsContainer />
    </div>
  );
}

export default Home;
