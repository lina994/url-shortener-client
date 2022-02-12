import { useState } from "react";
import instance from 'axiosConfig';

export const useAuth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [errMessage, setErrMessage] = useState(null);

  async function login() {
    try {
      setErrMessage(null);
      const response = await instance.post('/user/login', {
        username: username,
        password: password
      });
      setToken(response.data.token);
      setPassword('');
    } catch(error){
      setErrMessage(error.response.data.message);
    }
  }

  async function signUp() {
    try {
      setErrMessage(null);
      const response = await instance.post('/user/registration', {
        username: username,
        password: password
      });
      setToken(response.data.token);
      setPassword('');
    } catch(error){
      setErrMessage(error.response.data.message);
    }
  }

  async function logOut() {
    setToken(null);
    setUsername('');
    setPassword('');
  }

  return { username, setUsername, password, setPassword, token, login, signUp, logOut, errMessage };
};

