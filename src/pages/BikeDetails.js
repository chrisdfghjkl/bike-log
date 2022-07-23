import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Log from "../components/log/Log";

const BikeDetails = () => {
  const params = useParams();

  return ( 
    <Fragment>
      <h1>Bike Detail</h1>
      <p>{params.bikeId}</p>
      <Route path={`/bikes/${params.bikeId}/log`}>
        <Log />
      </Route>
    </Fragment>
  )
};

export default BikeDetails;