import styles from './NoBikes.module.css';
import { Link } from 'react-router-dom';
import Card from '../UI/Card'

const NoBikes = () => {
  return (
    <Card>
    <div className={styles.nobikes}>
      <p>No bikes found!</p>
      <Link className='btn' to='/add-bike'>
        Add a Bike
      </Link>
    </div>
    </Card>
  );
};

export default NoBikes;