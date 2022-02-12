import Form from 'components/Form';
import './SectionWrapper.css';

function SectionWrapper({title, labels, submitHandler, values, updateValues, resultTitle, resultValue, errMessage}) {
  return (
    <section className="App-section">
      <h2>{title}</h2>
      <Form labels={labels}
            submitHandler={submitHandler} 
            values={values} 
            updateValues={updateValues} 
            errMessage={errMessage} />
      <div className="Result-wrap">
        {resultValue && (
          <div className="Result">
            <p>
              <span className="Prefix">{`${resultTitle} `}</span>
              <span className="Result-value">{resultValue}</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default SectionWrapper;

