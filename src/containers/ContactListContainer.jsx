import { connect } from 'react-redux';
import ContactList from '../components/ContactList/ContactList';

const mapStateToProps = (state) => {
  return {
    contactList: state.contactList,
  };
};

const ContactListContainer = connect(mapStateToProps)(ContactList);

export default ContactListContainer;
