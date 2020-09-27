import { connect } from 'react-redux';
import AddContactForm from '../components/Form/AddContactForm';
import { addContact, requestSubmit } from '../actions';
// import { addContact } from '../sagas/index';

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (values) => {
      dispatch(addContact(values));
    },
  };
};

const AddContactContainer = connect(null, mapDispatchToProps)(AddContactForm);

export default AddContactContainer;
