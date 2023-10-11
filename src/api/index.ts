import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL_API,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;
