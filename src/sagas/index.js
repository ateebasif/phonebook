import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  LOAD_CONTACT_LIST,
  RENDER_CONTACT_LIST,
  REQUEST_SUBMIT,
  ADD_CONTACT,
} from '../actions';

import axios from 'axios';

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

export async function* postContact(contact) {
  console.log('post Contact', contact);
  // const response = yield axios
  //   .post(`https://http://localhost:8000/contact`, { ...contact })
  //   .then((res) => {
  //     console.log(res);
  //     console.log(res.data);
  //   });

  // const response = fetch('http://localhost:8000/contact', contact)
  //   .then(() => console.log('Site Created'))
  //   .catch((err) => {
  //     console.error(err);
  //   });

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  };

  const request = new Request('http://localhost:8000/contact', options);
  const response = await fetch(request);

  // const response = yield call(
  //   axios.post,
  //   `https://http://localhost:8000/contact`,
  //   {
  //     ...contact,
  //   }
  // );
  const data = yield response.json();
  console.log('post response', response);
  console.log('post data', data);

  yield put({
    type: ADD_CONTACT,
    contactItem: data,
  });
}

// async function submitToServer(data) {
//   try {
//     let response = await fetch('http://localhost:8000/contact', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });
//     let responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//     console.error(error);
//   }
// }

// function* callSubmit(action) {
//   const result = yield call(submitToServer, action.contactList);
//   yield put({ type: 'REQUEST_SUCCESSFUL' });
// }

// function* submitSaga() {
//   // yield takeEvery('REQUEST_SUBMIT', callSubmit());
//   yield takeEvery(REQUEST_SUBMIT, callSubmit());
// }

export function* addContact() {
  yield takeEvery(ADD_CONTACT, postContact);
}

export function* loadContactList() {
  yield takeEvery(LOAD_CONTACT_LIST, fetchContactList);
}

export default function* rootSaga() {
  yield all([loadContactList()]);
}
