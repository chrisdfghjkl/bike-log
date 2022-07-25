import { useRef } from "react";

import Card from '../UI/Card';
import LoadingWheel from '../UI/LoadingWheel';
import styles from './BikeForm.module.css';

const BikeForm = (props) => {
  
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

  return (
    <Card>
      <form className={styles.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={styles.loading}>
            <LoadingWheel />
          </div>
        )}

        <div className={styles.control}>
          <label htmlFor='make'>Make</label>
          <input type='text' id='make' ref={makeInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor='model'>Model</label>
          <input type='text' id='model' ref={modelInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor='year'>Year</label>
          <input type='text' id='year' ref={yearInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor='style'>Style</label>
          <input type='text' id='model' ref={modelInputRef} />
        </div>
        <div className={styles.actions}>
          <button className='btn'>Add Bike</button>
        </div>
      </form>
    </Card>
  );
};

export default BikeForm;