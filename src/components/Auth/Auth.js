import { Navigate } from 'react-router-dom';
import Button from '../Button'
import './Auth.css';


function handleSubmit(event, submitHandler) {
  submitHandler();
  event.preventDefault();
}


function Auth({ title, username, setUsername, password, setPassword, token, auth, errMessage }) {
  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="Auth">
      <h1>{title}</h1>
      <form className="Auth-form" onSubmit={(event) => handleSubmit(event, auth)}>
        <label>
          Username
          <input className="Auth-input" type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>
          Password
          <input className="Auth-input" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <Button type="submit" text={title} bgColor="createButtonBgColor" />
        {errMessage && (
          <div className="Error-message">{errMessage}</div>
        )}
      </form>
    </div>
  )
}


export default Auth;

