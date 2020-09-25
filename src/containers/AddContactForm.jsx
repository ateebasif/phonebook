import { connect } from 'react-redux';
import ContactList from '../components/ContactList/ContactList';
import AddContactForm from '../components/Form/AddContactForm';
import { addContact } from '../actions';

const mapDispatchToProps = (dispatch) => {
  console.log('state ', dispatch);
  return {
    addContact: (values) => {
      console.log(values);
      dispatch(addContact(values));
    },
  };
};

const AddContactContainer = connect(null, mapDispatchToProps)(AddContactForm);

export default AddContactContainer;
