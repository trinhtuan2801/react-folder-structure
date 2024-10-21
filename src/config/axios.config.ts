import axios from 'axios';
import Config from './env/env';

export const apiPublic = axios.create({
  baseURL: Config.config.apiUrl,
});

export const apiPrivate = axios.create({
  baseURL: Config.config.apiUrl,
  headers: { 'Content-Type': 'application/json' },
});

apiPrivate.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
