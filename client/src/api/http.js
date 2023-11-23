import axios from 'axios';

const access_token = localStorage.getItem('accessToken');

const http = axios.create({
  baseURL: 'https://09fd-2406-3100-1018-8-5a-0-ea0f-2717.ngrok-free.app',
  headers: {
    Authorization: `Bearer ${access_token}`,
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': true,
    timeout: 1000,
  },
  // .. other options
});

export default http;
