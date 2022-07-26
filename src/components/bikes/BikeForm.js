import { useRef, useState, Fragment } from "react";
import { Prompt } from "react-router-dom";

import Card from '../UI/Card';
import LoadingWheel from '../UI/LoadingWheel';
import styles from './BikeForm.module.css';

const BikeForm = (props) => {
  const [isFormEnter, setIsFormEnter] = useState(false);
  
  const makeInputRef = useRef();
  const modelInputRef = useRef();
  const yearInputRef = useRef();
  const styleInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredMake = makeInputRef.current.value;
    const enteredModel = modelInputRef.current.value;
    const enteredYear = yearInputRef.current.value;
    const enteredStyle = styleInputRef.current.value;

    props.onAddBike({ make: enteredMake, model: enteredModel, year: enteredYear, style: enteredStyle });
  }

  const formCompleteHandler = () => {
    setIsFormEnter(false);
  };

  const formFocusedHandler = () => {
    setIsFormEnter(true);
  };

  return (
    <Fragment>
      <Prompt when={isFormEnter} message={(location) => 'Your information has not been saved. Are you sure you want to leave?'}/>
      <Card>
        <form onFocus={formFocusedHandler} className={styles.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={styles.loading}>
              <LoadingWheel />
            </div>
          )}
          <div className="row">
            <div className="col s12 m6">
              <div className={styles.control}>
                <label htmlFor='make'>Make</label>
                <input type='text' id='make' ref={makeInputRef} />
              </div>
              <div className={styles.control}>
                <label htmlFor='model'>Model</label>
                <input type='text' id='model' ref={modelInputRef} />
              </div>
            </div>
            <div className="col s12 m6">
            <div className={styles.control}>
              <label htmlFor='year'>Year</label>
              <input type='text' id='year' ref={yearInputRef} />
            </div>
            <div className={styles.control}>
              <label htmlFor='style'>Style</label>
              <input type='text' id='model' ref={styleInputRef} />
            </div>
            </div>
          </div>
          <div className={styles.actions}>
            <button onClick={formCompleteHandler} className='btn'>Add Bike</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default BikeForm;