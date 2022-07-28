import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleBike } from "../lib/api";

import ExpandedBike from "../components/bikes/ExpandedBike";
import Log from "../components/log/Log";
import LoadingWheel from "../components/UI/LoadingWheel";


const BikeDetails = () => {
  const params = useParams();

  const { bikeId } = params;

  const { sendRequest, status, data: loadedBike, error} = useHttp(getSingleBike, true);

  useEffect(() => {
    sendRequest(bikeId);
  }, [sendRequest, bikeId]);

  if (status === 'pending') {
    return <div className="centered">
      <LoadingWheel />
    </div>
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }


  
  if (!loadedBike.make) {
    return <p>No bike found</p>
  }

  return ( 
    <Fragment>
      <ExpandedBike make={loadedBike.make} model={loadedBike.model} year={loadedBike.year} style={loadedBike.style} frame={loadedBike.frame} size={loadedBike.size} fork={loadedBike.fork} fDerailleur={loadedBike.fDerailleur} rDerailleur={loadedBike.rDerailleur} bar={loadedBike.bar} barGrip={loadedBike.barGrip} shifters={loadedBike.shifters} cassette={loadedBike.cassette} chain={loadedBike.chain} crank={loadedBike.crank} brakes={loadedBike.brakes} levers={loadedBike.levers} pedals={loadedBike.pedals} saddle={loadedBike.saddle} tires={loadedBike.tires} wheels={loadedBike.wheels} frontLight={loadedBike.frontLight} rearLight={loadedBike.rearLight} fenders={loadedBike.fenders} rack={loadedBike.rack} basket={loadedBike.basket} bell={loadedBike.bell} />
      {/* <Route path={`/bikes/${params.bikeId}/log`}> */}
        <Log />
      {/* </Route> */}
    </Fragment>
  )
};

export default BikeDetails;