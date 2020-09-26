import { ADD_CONTACT, SELECT_CONTACT } from '../actions';
import { RENDER_CONTACT_LIST } from '../actions';

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
