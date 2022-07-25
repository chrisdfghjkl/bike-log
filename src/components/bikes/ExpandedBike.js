import styles from './ExpandedBike.module.css';

const ExpandedBike = (props) => {
  return (
    <figure className={styles.bike}>
      <p>{props.make} {props.model}</p>
      <p>{props.year} | {props.style}</p>
    </figure>
  )
};

export default ExpandedBike;