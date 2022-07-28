import { Fragment } from "react";
import { useParams } from "react-router-dom";

import ExpandedBike from "../components/bikes/ExpandedBike";
import Log from "../components/log/Log";

const SEED_BIKES = [
  { id: 'b1', make: 'Poseidon', model: 'Flatbar X', year: '2021', style: 'Gravel', frame: '6061 Double Butted Hydroformed Aluminum', size: 'LG', fork: 'Full Carbon fork', fDerailleur: '', rDerailleur: 'MicroShift Advent X 10 Speed with Clutch', bar: 'Poseidon Flatbars', barGrip: 'Ergon-GP3', shifters: 'MicroShift Advent X 10 Speed', cassette: 'Microshift 11-48T Advent X 10 Speed', chain: 'KMC 10 Speed', crank: 'Prowheel 38t Narrow Wide Chainring with 170mm crank arms', brakes: 'Tektro MD-C510 Mechanical Disc', levers: 'Tektro Flatbar Levers', pedals: 'RaceFace Ride Pedal', saddle: 'Poseidon X (stock)', tires: 'Kenda Small Block 700x35', wheels: 'Poseidon Alloy 700c 32h, quick-release axle', frontLight: 'Planet Bike Blaze 150SL', rearLight: 'Planet Bike Superflash 65R', fenders: 'PDW Oragami Fenders', rack: '', basket: 'PDW Bodega Basket', Bell: '' },
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