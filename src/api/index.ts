import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;
