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
            size={bike.size}
            fork={bike.fork}
            fDerailleur={bike.fDerailleur}
            rDerailleur={bike.rDerailleur}
            bar={bike.bar}
            barGrip={bike.barGrip}
            shifters={bike.shifters}
            cassette={bike.cassette}
            chain={bike.chain}
            crank={bike.crank}
            brakes={bike.brakes}
            levers={bike.levers}
            pedals={bike.pedals}
            saddle={bike.saddle}
            tires={bike.tires}
            wheels={bike.wheels}
            frontLight={bike.frontLight}
            rearLight={bike.rearLight}
            fenders={bike.fenders}
            rack={bike.rack}
            basket={bike.basket}
            bell={bike.bell}
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