import styles from './BikeItem.module.css';

const BikeItem = (props) => {
  return (
    <li className='styles.item'>
      <figure>
        <blockquote>
          <p>{props.year} {props.make} {props.model}</p>
        </blockquote>
        <figcaption>{props.style}</figcaption>
      </figure>
      <a className='btn'>
        More Details
      </a>
    </li>
  )
};

export default BikeItem;