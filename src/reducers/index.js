import { ADD_CONTACT } from '../actions';
import { RENDER_CONTACT_LIST } from '../actions';

const initialState = {
  contactList: [],
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
    default:
      return state;
  }
}
