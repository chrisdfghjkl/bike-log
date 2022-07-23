import { useRef } from "react";

import styles from './NewLogForm.module.css';

const NewLogForm = (props) => {
  const logTextRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <div className={styles.control} onSubmit={submitFormHandler}>
        <label htmlFor='log-entry'>Log Details</label>
        <textarea id='log-entry' rows='5' ref={logTextRef}></textarea>
      </div>
      <div className={styles.actions}>
        <button className='btn'>Add Log Entry</button>
      </div>
    </form>
  )
}

export default NewLogForm;