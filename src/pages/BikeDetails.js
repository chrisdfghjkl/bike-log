import { Fragment } from "react";
import { useParams } from "react-router-dom";

const BikeDetails = () => {
  const params = useParams();

  return ( 
    <Fragment>
      <h1>Bike Detail</h1>
      <p>{params.bikeId}</p>
    </Fragment>
  )
};

export default BikeDetails;