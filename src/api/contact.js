import makeRequest from './makeRequest';
const SERVER_URL = 'http://localhost:8000';
export const saveContact = (data) => {
  const url = `${SERVER_URL}/contact`;
  return makeRequest(
    {
      url,
      data: data,
      method: 'post',
    },
    true
  )
    .then((response) => response)
    .catch((e) => {
      console.log('===>Error Posting Contact :', e);
    });
};

export const fetchContacts = () => {
  const url = `${SERVER_URL}/contact`;
  return makeRequest(
    {
      url,
      method: 'get',
    },
    true
  )
    .then((response) => response)
    .catch((e) => {
      console.log('===>Error Fetching Contacts :', e);
    });
};
