import { useState } from "react";

import styles from './Log.module.css';
import NewLogForm from "./NewLogForm";


const Log = () => {
  const [isAddingLogItem, setIsAddingLogItem] = useState(false);

  const startAddLogItemHandler = () => {
    setIsAddingLogItem(true);
  };

  return (
    <section className={styles.log}>
      <h2>Log</h2>
      {!isAddingLogItem && (
        <button className='btn' onClick={startAddLogItemHandler}>
          Add Log Entry
        </button>
      )}
      {isAddingLogItem && <NewLogForm />}
      <p>Log...</p>
    </section>
  )
};

export default Log;