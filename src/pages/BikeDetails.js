import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Log from "../components/log/Log";

const SEED_BIKES = [
  { id: 'b1', make: 'Poseidon', model: 'Flatbar X', year: '2021', style: 'Gravel' },
  { id: 'b2', make: 'Kona', model: 'Dew Plus', year: '2020', style: 'Commuter' }
];

const BikeDetails = () => {
  const params = useParams();

  const bike = SEED_BIKES.find(bike => bike.id === params.bikeId);

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