import { connect } from 'react-redux';
import ContactDetails from '../components/ContactDetails/ContactDetails';

const mapStateToProps = (state) => {
  return {
    contact: state.phonebook.contactList.find(
      (contact) => contact._id === state.phonebook.selectedContactId
    ),
  };
};

const ContactListContainer = connect(mapStateToProps)(ContactDetails);

export default ContactListContainer;
