import './Form.css';

function handleChange(event, updateValue) {
  updateValue(event.target.value);
}

function handleSubmit(event, submitHandler) {
  submitHandler();
  event.preventDefault();
}



function Form({submitHandler, value, updateValue}) {
  return (
    <form onSubmit={(event) => handleSubmit(event, submitHandler)}>
      <label>
        Name:
        <input type="text" value={value} onChange={(event) => handleChange(event, updateValue)} />
      </label>
      <input type="submit" value="Convert" />
    </form>
  );
}

export default Form;

