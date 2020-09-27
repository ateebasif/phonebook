import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  LOAD_CONTACT_LIST,
  SAVE_CONTACT,
  saveContactRequested,
  saveContactSucceeded,
  addContact,
  saveContactFailed,
  renderContactList,
} from '../actions';
import { saveContact, fetchContacts } from '../api/contact';

export function* fetchContactList() {
  const data = yield call(fetchContacts);
  yield put(renderContactList(data));
}

export function* saveContactToServer(action) {
  try {
    yield put(saveContactRequested());
    const contact = yield call(saveContact, action.contactItem);
    yield put(addContact(contact));
    yield put(saveContactSucceeded());
  } catch (e) {
    yield put(saveContactFailed(e.message));
  }
}

export function* saveContactSaga() {
  yield takeLatest(SAVE_CONTACT, saveContactToServer);
}

export function* loadContactList() {
  yield takeEvery(LOAD_CONTACT_LIST, fetchContactList);
}

export default function* rootSaga() {
  yield all([loadContactList(), saveContactSaga()]);
}
