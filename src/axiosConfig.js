import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://url-2-link.herokuapp.com/api/'
});


export default instance;

