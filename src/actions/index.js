export const ADD_CONTACT = 'ADD_CONTACT';
export const SELECT_CONTACT = 'SELECT_CONTACT';

export function addContact(contact) {
  return {
    type: ADD_CONTACT,
    contactItem: {
      _id: new Date().getTime(),
      ...contact,
    },
  };
}

export function selectContact(id) {
  return {
    type: SELECT_CONTACT,
    contactId: id,
  };
}

export const LOAD_CONTACT_LIST = 'LOAD_CONTACT_LIST';
export const RENDER_CONTACT_LIST = 'RENDER_CONTACT_LIST';

export function loadContactList() {
  return {
    type: LOAD_CONTACT_LIST,
  };
}
