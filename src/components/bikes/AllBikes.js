import { Fragment } from "react";
import { Link } from "react-router-dom";

import BikeItem from "./BikeItem";
import styles from "./AllBikes.module.css";

const AllBikes = (props) => {
  return (
    <Fragment>
      <div className={styles.item}>
      <ul className={styles.list}>
        {props.bikes.map((bike) => (
          <BikeItem
            key={bike.id}
            id={bike.id}
            make={bike.make}
            model={bike.model}
            year={bike.year}
            style={bike.style}
            frame={bike.frame}
          />
        ))}
      </ul>
      <Link to={`/add-bike`} className='btn centered'>
        + Add Bike
      </Link>
      </div>
    </Fragment>
  )
};

export default AllBikes;