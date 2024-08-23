import { API_ENDPOINTS } from './api.constants';

export const updateVariantColor = (variant) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    body: `{\"email\":\"test@example.com\",\"variant\":\"${variant}\"}`,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
    mode: 'cors',
  };

  fetch(API_ENDPOINTS.UPDATE_DATA, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};
