import Button from '../Button'
import './Form.css';

function handleChange(event, updateValue) {
  updateValue(event.target.value);
}

function handleSubmit(event, submitHandler) {
  submitHandler();
  event.preventDefault();
}

function handleClear(updateValues) {
  for (let cb of updateValues) {
    cb('');
  }
  
}



function Form({labels, submitHandler, values, updateValues, errMessage}) {
  return (
    <form className="App-form" onSubmit={(event) => handleSubmit(event, submitHandler)}>
      {
        labels.map((label, index) => {
          return (
            <label key={index}>
              {label}
              <input type="text" value={values[index]} onChange={(event) => handleChange(event, updateValues[index])} />
            </label>
          )
        })
      }
      { errMessage && (
        <div className="Error-message">{errMessage}</div>
      )}
      <div>
        <Button type="submit" text="Create" bgColor="createButtonBgColor" />
        <Button type="button" text="Clear" bgColor="clearButtonBgColor" clickHandler={() => handleClear(updateValues) } />
      </div>
    </form>
  );
}

export default Form;

