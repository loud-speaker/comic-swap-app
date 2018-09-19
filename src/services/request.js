import store from '../store/store';
import { getUser } from '../components/auth/reducers';

let token = '';

const key = 'user';
const storage = window.localStorage;

store.subscribe(() => {
  const user = getUser(store.getState());
  const nextToken = user ? (user.token || '') : '';
  if(nextToken === token) return;

  token = nextToken;
  token ? storage.setItem(key, JSON.stringify(user)) : clearStoredUser();
});

export const getStoredUser = () => {
  const json = storage.getItem(key);
  try {
    return JSON.parse(json);
  }
  catch(err) {
    clearStoredUser();
  }
};

export const clearStoredUser = () => storage.removeItem(key);

function request(url, options = {}, data) {
  if(options.method === 'GET' && data) {
    let searchParams = '?' + Object.keys(data).map(key => `${key}=${data[key]}`).join('&');
    url += searchParams;
    console.log('ANDREW BODEY', url);
  } else if(data) {
    options.body = JSON.stringify(data);
  }
  if(token) {
    if(!options.headers) options.headers = {};
    options.headers.Authorization = token;
  }
  console.log('ZZZZZZZ OPTIONS BODY', options.body);
  return fetch(url, options)
    .then(response => {
      console.log('OPTIONS BODY', options.body);
      return [response.ok, response.json()];
    })
    .then(([ok, json]) => {
      if(ok) return json;
      throw json.message || json.error || json.errors || json;
    });
}

const headers = {
  'content-type': 'application/json'
};

export const get = (url, options = {}, data) => request(url, { method: 'GET', ...options }, data);
export const post = (url, data) => request(url, { method: 'POST', headers }, data);
export const put = (url, data) => request(url, { method: 'PUT', headers }, data);
export const del = (url, data) => request(url, { method: 'DELETE' }, data);