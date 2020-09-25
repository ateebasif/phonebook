import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_CONTACT_LIST, RENDER_CONTACT_LIST } from '../actions';

export function* fetchContactList() {
  const endpoint = 'http://localhost:8000/contact';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  console.log(data);
  console.log(response);
  yield put({
    type: RENDER_CONTACT_LIST,
    contactList: data,
  });
}

export function* loadContactList() {
  yield takeEvery(LOAD_CONTACT_LIST, fetchContactList);
}

export default function* rootSaga() {
  yield all([loadContactList()]);
}
