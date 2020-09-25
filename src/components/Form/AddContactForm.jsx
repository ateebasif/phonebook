import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import submit from './Submit';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const nameValidateExp = /^[a-zA-Z ]{4}\w*$/; // [a-zA-Z ]{4}\w*$ it can accept digits also
const numValidateExp = /^[3][0][1]\s\d{3}\s\d{4}$/;

const validate = (values) => {
  const errors = {};
  //   Name Validation
  if (!values.name) {
    errors.username = 'Required';
  } else if (!nameValidateExp.test(values.name)) {
    errors.name =
      'Must be more than 3 characters and cannot contain any special character';
  } else {
    errors.name = 'Name is correct';
  }
  // Phone Number Validation
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Required';
  } else if (numValidateExp.test(values.phoneNumber)) {
    errors.phoneNumber = 'Phone is correct';
  } else {
    errors.phoneNumber =
      'Phone is incorrect!, Format (301) *** ****, Must Start with 3 and then have 7 digits, it cannot contain alphabets special characters!';
  }
  //    Address Validation
  if (!values.address) {
    errors.address = 'Required';
  }
  //   else if (values.name.length <= 3 || values.name !== /^[a-z]/) {
  else if (values.address.length > 3 && values.address.length < 200) {
    errors.address = 'valid Address';
  } else {
    errors.address =
      'Address must be greater than 3 characters and less than 200';
  }
  //   Bio Validation
  if (!values.bio) {
    errors.bio = 'Required';
  } else if (values.bio.length > 10 && values.bio.length < 1000) {
    errors.bio = 'Valid';
  } else {
    errors.bio =
      'Bio Must be more than 10 characters and less than 1000 character';
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

const renderField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} />
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
      <Field
        name="name"
        type="text"
        component={renderField}
        placeholder="Name"
        label="Name"
      />
      <Field
        name="address"
        type="text"
        component={renderField}
        placeholder="Address"
        label="Address"
      />
      <Field
        name="bio"
        type="text"
        component={renderField}
        placeholder="Bio"
        label="Bio"
      />
      <Field
        name="phoneNumber"
        type="text"
        component={renderField}
        label="PhoneNumber"
        placeholder="Format (301) *** ****"
      />
      <Field
        name="profilePicture"
        type="file"
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
