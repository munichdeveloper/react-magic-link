import axios from 'axios';
import { config } from '../Config';
import { parseJwt } from '../Helpers';

export const api = {
  authenticateWithDid,
  getCats,
}

function authenticateWithDid(didToken) {
  return instance.post('/magic/signinByMagicToken', didToken, {
    headers: { 'Content-type': 'application/json' }
  });
}

function getCats(user) {
  return instance.get('/cats', {
    headers: { 'Authorization': bearerAuth(user) }
  });
}

const instance = axios.create({
  baseURL: config.url.API_BASE_URL
})

instance.interceptors.request.use(function (config) {
  if (config.headers.Authorization) {
    const token = config.headers.Authorization.split(' ')[1];
    parseJwt(token);
  };
  return config;
}, function (error) {
  return Promise.reject(error);
})

function bearerAuth(user) {
  return `Bearer ${user.token}`;
}