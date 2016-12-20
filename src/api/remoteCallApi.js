import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function get(url) {
  return execute(url,'GET');
}

export function del(url) {
  return execute(url,'DELETE');
}

function execute(url, method) {
  const request = new Request(baseUrl + url, { method: method});
  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); //eslint-disable-line no-console
}
