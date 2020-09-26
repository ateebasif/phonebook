import { connect } from 'react-redux';
import AddContactForm from '../components/Form/AddContactForm';
import { addContact } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (values) => {
      dispatch(addContact(values));
    },
  };
};

const AddContactContainer = connect(null, mapDispatchToProps)(AddContactForm);

export default AddContactContainer;
