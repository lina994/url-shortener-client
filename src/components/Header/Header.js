import { Link } from "react-router-dom";
import logo from 'logo.svg';
import './Header.css';

function Header({token, logOut}) {
  return (
    <header className="App-header">
      <Link className="Logo-link" to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
      <nav className="App-nav">
        {!token && (<Link to="login">Log in</Link>)}
        {!token && (<Link to="sign-up">Sign up</Link>)}
        {token && (<button className="Logout-button" onClick={logOut}>Log out</button>)}
      </nav>
    </header>
  );
}

export default Header;

