import { useRef, useEffect } from "react";
import useHttp from '../../hooks/use-http';
import { addLog } from '../../lib/api';

import styles from './NewLogForm.module.css';
import LoadingWheel from "../UI/LoadingWheel"

const NewLogForm = (props) => {
  const logTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addLog);

  const { onAddedLog } = props;

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedLog();
    }
  }, [status, error, onAddedLog]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = logTextRef.current.value;

    sendRequest({text: enteredText}, props.bikeId);
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className="centered">
          <LoadingWheel />
        </div>
      )}
      <div className={styles.control} onSubmit={submitFormHandler}>
        <textarea id='log-entry' rows='5' ref={logTextRef}></textarea>
      </div>
      <div className={styles.actions}>
        <button className='btn'>Submit Log Entry</button>
      </div>
    </form>
  )
}

export default NewLogForm;