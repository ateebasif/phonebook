import { connect } from 'react-redux';
import ContactList from '../components/ContactList/ContactList';
import { selectContact } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    contactList: state.phonebook.contactList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectContact: (id) => {
      dispatch(selectContact(id));
    },
  };
};

const ContactListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);

export default ContactListContainer;
