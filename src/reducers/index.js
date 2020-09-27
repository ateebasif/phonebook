import { ADD_CONTACT, SELECT_CONTACT, REQUEST_SUBMIT } from '../actions';
import { RENDER_CONTACT_LIST } from '../actions';
import dispatch from 'redux';
import axios from 'axios';

const initialState = {
  contactList: [],
  selectedContactId: null,
};

export default function phonebookApp(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      const newContactList = [
        ...state.contactList,
        {
          ...action.contactItem,
        },
      ];
      return {
        ...state,
        contactList: newContactList,
      };

    case RENDER_CONTACT_LIST:
      return {
        ...state,
        contactList: action.contactList,
      };
    case SELECT_CONTACT:
      return {
        ...state,
        selectedContactId: action.contactId,
      };
    default:
      return state;
  }
}

export const saveContact = () => async (dispatch, getState) => {
  const contacts = { ...getState().contactList };
  let response = await fetch('http://localhost:8000/contact', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(contacts),
  });

  alert('Success', response);
  console.log('dispatch', contacts);
  console.log('getstate', getState);
  console.log('response', response);
};
