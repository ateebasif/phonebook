import React, { useState } from 'react';
import { Field, reduxForm, isValid } from 'redux-form';
import ImageUploader from 'react-images-upload';
import { Form } from 'react-bootstrap';
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
import './Form.css';
import { useDispatch } from 'react-redux';
import { saveContact } from '../../reducers/index';
import { saveContactt } from '../../actions/index';
// import { response } from 'express';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let inputFieldClass = '';
const validate = (values) => {
  const errors = {};
  const nameValidateExp = /^[a-zA-Z ]{4}\w*$/; // [a-zA-Z ]{4}\w*$ it can accept digits also
  const numValidateExp = /^[3][0][1]\s\d{3}\s\d{4}$/;
  inputFieldClass = '';
  //   Name Validation
  if (!values.name) {
    errors.username = 'Required';
  } else if (!nameValidateExp.test(values.name)) {
    errors.name =
      'Must be more than 3 characters and cannot contain any special character';
    inputFieldClass = 'input-fields-error';
  } else {
    inputFieldClass = 'input-fields-good';
  }
  // Phone Number Validation
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Required';
  } else if (!numValidateExp.test(values.phoneNumber)) {
    errors.phoneNumber = 'Phone number should be in the format (301) 000 0000';
    inputFieldClass = 'input-fields-error';
  } else {
    inputFieldClass = 'input-fields-good';
  }
  //    Address Validation
  if (!values.address) {
    errors.address = 'Required';
  } else if (!(values.address.length > 3 && values.address.length < 200)) {
    errors.address =
      'Address should be more than 3 characters but less than 200 char';
    inputFieldClass = 'input-fields-error';
  } else {
    inputFieldClass = 'input-fields-good';
  }
  //   Bio Validation
  if (!values.bio) {
    errors.bio = 'Required';
  } else if (!(values.bio.length > 10 && values.bio.length < 1000)) {
    errors.bio =
      'Bio should be more than 10 characters but less than 1000 char';
    inputFieldClass = 'input-fields-error';
  } else {
    inputFieldClass = 'input-fields-good';
  }

  return errors;
};

const renderField = ({
  input,
  name,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  // <div>
  //   <label>{label}</label>
  //   <div>
  //     <input {...input} placeholder={placeholder} type={type} />
  //     {touched && error && <span>{error}</span>}
  //   </div>
  // </div>

  <Form.Group controlId={name}>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      {...input}
      isValid={touched.input && !error.input}
      type={type}
      placeholder={placeholder}
      className={inputFieldClass}
    />
    {touched && !error && (
      <Form.Control.Feedback className="valid-message" type>
        Looks good!
      </Form.Control.Feedback>
    )}
    {touched && error && (
      <Form.Text className=" invalid-message">{error}</Form.Text>
    )}
  </Form.Group>
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

  const [image, setImage] = useState('');

  const submit = (values) => {
    return sleep(1000).then(() => {
      console.log('contact form submitted values', values);
      addContact({ ...values, profilePicture: image });
      // requestSubmit({ ...values, profilePicture: image });
    });
  };

  const onDrop = (files) => {
    var file = files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setImage(reader.result);
    };
  };

  const dispatch = useDispatch();

  const onSave = (values) => {
    console.log('onsave');
    dispatch(saveContact());
  };

  return (
    <Container className="form-container" data-test="add_contact_form">
      <Row>
        <Col sm={12}>
          <h1 className="add-contact-heading text-center">Add New Contact</h1>
        </Col>
      </Row>
      <form onSubmit={handleSubmit(submit)}>
        <Row>
          <Col sm={6} className={'left-col'}>
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
            <div>
              <Field
                name="phoneNumber"
                type="text"
                component={renderField}
                label="PhoneNumber"
                placeholder="Format (301) *** ****"
              />
              <Field
                name="bio"
                type="text"
                component={renderField}
                placeholder="Bio"
                label="Bio"
              />
            </div>
          </Col>
          <Col sm={6} className="right-col text-center">
            <img
              className="img-thumbnail"
              src={image}
              height="200"
              width="200"
              alt=""
            />
            <ImageUploader
              className="img-uploader"
              withIcon={true}
              buttonText="Choose Profile Picture"
              onChange={onDrop}
              imgExtension={['.jpg', '.png']}
              label="Max image size 200kb. Accepted: jpg, png"
              maxFileSize={200000}
            />

            {error && <strong>{error}</strong>}
            <div className="submit-clear ">
              <button
                className="btn btn-secondary orange square-button "
                type="submit"
                disabled={submitting}
                onClick={onSave}
              >
                Add Contact
              </button>
              <button
                className="btn btn-danger red square-button"
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
              >
                Clear Values
              </button>
            </div>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default reduxForm({
  form: 'submitValidation', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(SubmitValidationForm);
