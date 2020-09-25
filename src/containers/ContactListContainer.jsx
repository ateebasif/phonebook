import { connect } from 'react-redux';
import ContactList from '../components/ContactList/ContactList';

const mapStateToProps = (state) => {
  console.log('state ', state);
  return {
    contactList: state.phonebook.contactList,
  };
};

const ContactListContainer = connect(mapStateToProps)(ContactList);

export default ContactListContainer;
