import { configureAuth } from 'react-query-auth';
import { apiPrivate } from './axios.config';

const getUser = async () => {
  const response = await apiPrivate.get('/auth/me');
  return response.data;
};

const logout = async () => {
  await apiPrivate.post('/logout');
  localStorage.removeItem('access_token');
};

const authConfig = {
  userFn: getUser,
  loginFn: async () => {
    const response = await apiPrivate.post('/login');
    return response;
  },
  registerFn: async () => {},
  logoutFn: logout,
};

export const { useUser, useLogin, useLogout, useRegister, AuthLoader } = configureAuth(authConfig);