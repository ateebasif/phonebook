import { connect } from 'react-redux';
import AddContactForm from '../components/Form/AddContactForm';
import { saveContact } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (values) => {
      dispatch(saveContact(values));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    saveContactInProgress: state.phonebook.saveContactInProgress,
    saveContactError: state.phonebook.saveContactError,
  };
};

const AddContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContactForm);

export default AddContactContainer;
