import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Auth from './components/Auth';
import Content from './components/Content';
import Footer from './components/Footer';
import { useAuth } from "hooks";
import './App.css';

function App() {
  const { username, setUsername, password, setPassword, token, login, signUp, logOut, errMessage } = useAuth();

  return (
    <div className="App">
      <Header token={token} logOut={logOut} />
      <Routes>
        <Route path="/login" element={
          <Auth title="Log in" username={username} setUsername={setUsername} password={password} setPassword={setPassword} token={token} auth={login} errMessage={errMessage} />
          } />
        <Route path="/sign-up" element={
          <Auth title="Sign up" username={username} setUsername={setUsername} password={password} setPassword={setPassword} token={token} auth={signUp} errMessage={errMessage} />
          } />
        <Route path="/" element={<Content token={token} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
