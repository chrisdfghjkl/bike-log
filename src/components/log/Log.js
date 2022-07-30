import { useState, useEffect, useCallback } from "react";

import styles from './Log.module.css';
import NewLogForm from "./NewLogForm";
import Card from "../UI/Card";
import { useParams } from "react-router-dom";

import useHttp from "../../hooks/use-http";
import { getAllLogs } from "../../lib/api";
import LoadingWheel from "../UI/LoadingWheel";
import LogList from "./LogList";

const Log = () => {
  const [isAddingLogItem, setIsAddingLogItem] = useState(false);
  const params = useParams();

  const { bikeId } = params;

  const { sendRequest, status, data: loadedLogs } =useHttp(getAllLogs);

  useEffect(() => {
    sendRequest(bikeId);
  }, [bikeId, sendRequest]);

  const startAddLogItemHandler = () => {
    setIsAddingLogItem(true);
  };

  const addedLogHandler = useCallback(() => {
    sendRequest(bikeId)
  }, [sendRequest, bikeId]);

  let logs;

  if (status === 'pending') {
    logs = (
      <div className="centered">
        <LoadingWheel />
      </div>
    );
  }

  if (status === 'completed' && (loadedLogs && loadedLogs.length > 0)) {
    logs = <LogList logs={loadedLogs}/>
  }

  if (status === 'completed' &&
    (!loadedLogs || loadedLogs.length === 0)
  ) {
    logs = <p className="centered"> No log entries added yet!</p>
  }

  return (
    <Card>
    <section className={styles.log}>
      {!isAddingLogItem && (
        <button className='btn' onClick={startAddLogItemHandler}>Add Log Entry</button>
      )}
      {isAddingLogItem && (
        <NewLogForm 
          bikeId={params.bikeId} 
          onAddedLog={addedLogHandler}
        />
      )}
      {logs}
    </section>
    </Card>
  )
};

export default Log;