import logo from 'logo.svg';
import './Hero.css';

function Hero() {
  return (
    <section className="App-hero">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        URL2Link - URL Shortener
      </h1>
    </section>
  );
}

export default Hero;

