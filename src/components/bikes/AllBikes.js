import { Fragment } from "react";

import BikeItem from "./BikeItem";
import styles from "./AllBikes.module.css";

const AllBikes = (props) => {
  return (
    <Fragment>
      <ul className={styles.list}>
        {props.bikes.map((bike) => (
          <BikeItem
            key={bike.id}
            id={bike.id}
            make={bike.make}
            model={bike.model}
            year={bike.year}
            style={bike.style}
          />
        ))}
      </ul>
    </Fragment>
  )
};

export default AllBikes;