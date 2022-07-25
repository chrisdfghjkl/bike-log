import { Link } from 'react-router-dom';

import styles from './BikeItem.module.css';

const BikeItem = (props) => {
  return (
    <li className={styles.item}>
      <figure>
        <blockquote>
          <p>{props.year} {props.make} {props.model}</p>
        </blockquote>
        <figcaption>{props.style}</figcaption>
      </figure>
      <Link to={`/bikes/${props.id}`} className='btn'>
        More Details
      </Link>
    </li>
  )
};

export default BikeItem;