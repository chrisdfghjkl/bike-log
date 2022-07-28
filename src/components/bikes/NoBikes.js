import styles from './NoBikes.module.css';
import { Link } from 'react-router-dom';

const NoBikes = () => {
  return (
    <div className={styles.nobikes}>
      <p>No bikes found!</p>
      <Link className='btn' to='/add-bike'>
        Add a Bike
      </Link>
    </div>
  );
};

export default NoBikes;