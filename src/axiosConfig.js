import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://url-2-link.herokuapp.com/api/'
  // baseURL: 'http://localhost:3001/api/'
});


export default instance;

