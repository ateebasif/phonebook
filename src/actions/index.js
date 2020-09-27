export const ADD_CONTACT = 'ADD_CONTACT';
export const SELECT_CONTACT = 'SELECT_CONTACT';
export const REQUEST_SUBMIT = 'REQUEST_SUBMIT';

export const SAVE_CONTACT = 'SAVE_CONTACT';
export const SAVE_CONTACT_REQUESTED = 'SAVE_CONTACT_REQUESTED';
export const SAVE_CONTACT_FAILED = 'SAVE_CONTACT_FAILED';
export const SAVE_CONTACT_SUCCEEDED = 'SAVE_CONTACT_SUCCEEDED';

export function requestSubmit(contact) {
  return {
    type: REQUEST_SUBMIT,
    contactItem: {
      _id: new Date().getTime(),
      ...contact,
    },
  };
}

export function addContact(contact) {
  return {
    type: ADD_CONTACT,
    contactItem: {
      _id: new Date().getTime(),
      ...contact,
    },
  };
}

export function saveContact(contact) {
  return {
    type: SAVE_CONTACT,
    contactItem: {
      _id: new Date().getTime(),
      ...contact,
    },
  };
}

// Action for Server Error
export function saveContactFailed(error) {
  return {
    type: SAVE_CONTACT_FAILED,
    error: error,
  };
}

export function saveContactSucceeded() {
  return {
    type: SAVE_CONTACT_SUCCEEDED,
  };
}

export function saveContactRequested() {
  return {
    type: SAVE_CONTACT_REQUESTED,
  };
}

export function selectContact(id) {
  return {
    type: SELECT_CONTACT,
    contactId: id,
  };
}

export function renderContactList(contactList) {
  return {
    type: RENDER_CONTACT_LIST,
    contactList: contactList,
  };
}

export const LOAD_CONTACT_LIST = 'LOAD_CONTACT_LIST';
export const RENDER_CONTACT_LIST = 'RENDER_CONTACT_LIST';

export function loadContactList() {
  return {
    type: LOAD_CONTACT_LIST,
  };
}
