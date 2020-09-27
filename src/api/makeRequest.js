import axios from 'axios';

export default function makeRequest(params) {
  let paramsWithDefaults = {
    ...params,
  };

  return axios
    .request(paramsWithDefaults)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      throw e;
    });
}
