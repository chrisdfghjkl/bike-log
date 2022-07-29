import LogItem from './LogItem';
import styles from './LogList.module.css';

const LogList = (props) => {
  return (
    <ul className={styles.logs}>
      {props.logs.map((log) => (
        <LogItem key={log.id} text={log.text} />
      ))}
    </ul>
  );
};

export default LogList;