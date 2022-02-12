import './Button.css';

function Button({ type, text, bgColor, clickHandler }) {

  return (
    <button className={`App-button ${bgColor}`} type={type} onClick={clickHandler}>
      {text}
    </button>
  );
}

export default Button;