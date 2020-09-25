import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import submit from './Submit';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.age) {
    errors.age = 'Required';
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number';
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old';
  }
  return errors;
};

const warn = (values) => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...';
  }
  return warnings;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const SubmitValidationForm = (props) => {
  const {
    error,
    handleSubmit,
    pristine,
    reset,
    submitting,
    addContact,
  } = props;

  const submit = (values) => {
    return sleep(1000).then(() => {
      console.log(values);
      addContact(values);
    });
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field name="name" type="text" component={renderField} label="Name" />
      <Field
        name="address"
        type="text"
        component={renderField}
        label="Address"
      />
      <Field name="bio" type="text" component={renderField} label="Bio" />
      <Field
        name="phoneNumber"
        type="text"
        component={renderField}
        label="PhoneNumber"
      />
      <Field
        name="profilePicture"
        type="text"
        component={renderField}
        label="ProfilePicture"
      />
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>
          Add Contact
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'submitValidation', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn,
})(SubmitValidationForm);
