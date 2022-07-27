import { Fragment } from "react";
import { useParams } from "react-router-dom";

import ExpandedBike from "../components/bikes/ExpandedBike";
import Log from "../components/log/Log";

const SEED_BIKES = [
  { id: 'b1', make: 'Poseidon', model: 'Flatbar X', year: '2021', style: 'Gravel' },
  { id: 'b2', make: 'Kona', model: 'Dew Plus', year: '2020', style: 'Commuter' }
];

const BikeDetails = () => {
  const params = useParams();

  const bike = SEED_BIKES.find(bike => bike.id === params.bikeId);

  if (!bike) {
    return <p>No bike found</p>
  }

  return ( 
    <Fragment>
      <ExpandedBike make={bike.make} model={bike.model} year={bike.year} style={bike.style} frame={bike.frame} size={bike.size} fork={bike.fork} fDerailleur={bike.fDerailleur} rDerailleur={bike.rDerailleur} bar={bike.bar} barGrip={bike.barGrip} shifters={bike.shifters} cassette={bike.cassette} chain={bike.chain} crank={bike.crank} brakes={bike.brakes} levers={bike.levers} pedals={bike.pedals} saddle={bike.saddle} tires={bike.tires} wheels={bike.wheels} frontLight={bike.frontLight} rearLight={bike.rearLight} fenders={bike.fenders} rack={bike.rack} basket={bike.basket} bell={bike.bell}/>
      {/* <Route path={`/bikes/${params.bikeId}/log`}> */}
        <Log />
      {/* </Route> */}
    </Fragment>
  )
};

export default BikeDetails;