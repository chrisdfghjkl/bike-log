import { useState } from "react";

import styles from './Log.module.css';
import NewLogForm from "./NewLogForm";
import Card from "../UI/Card";


const Log = () => {
  const [isAddingLogItem, setIsAddingLogItem] = useState(false);

  const startAddLogItemHandler = () => {
    setIsAddingLogItem(true);
  };

  return (
    <Card>
    <section className={styles.log}>
      {!isAddingLogItem && (
        <div className="btn-group">
          <button className='btn' onClick={startAddLogItemHandler}>Log Ride</button>
          <button className='btn' onClick={startAddLogItemHandler}>Log Service</button>
        </div>
      )}
      {isAddingLogItem && <NewLogForm />}
    </section>
    </Card>
  )
};

export default Log;