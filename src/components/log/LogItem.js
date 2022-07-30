import styles from './LogItem.module.css';

const LogItem = (props) => {
  return (
    <div className={styles.logcard}>
      <li className={styles.item}>
        <p><span className={styles.date}>[{props.date}]</span> {props.text}</p>
      </li>
    </div>
  );
};

export default LogItem;