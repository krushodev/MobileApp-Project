// @ts-nocheck

import axios from '../index';

export const login = async data => {
  try {
    const response = await axios.post('/sessions/login', data);
    return response.data;
  } catch (err) {
    throw new Error(err as string);
  }
};

export const signup = async data => {
  try {
    const response = await axios.post('/sessions/signup', data);
    return response.data;
  } catch (err) {
    throw new Error(err as string);
  }
};

export const provideRefreshToken = async data => {
  try {
    const response = await axios.post('/sessions/refresh-token', data);
    return response.data;
  } catch (err) {
    throw new Error(err as string);
  }
};
