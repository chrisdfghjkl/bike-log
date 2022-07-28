import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { addBike } from "../lib/api";

import BikeForm from "../components/bikes/BikeForm";

const AddBike = () => {
  const { sendRequest, status } = useHttp(addBike);
  const history = useHistory();

  useEffect(() => {
    if (status === 'completed') {
      history.push('/bikes')
    }
  }, [status, history]);

  const addBikeHandler = (bikeData) => {
    sendRequest(bikeData);
  };


  return <BikeForm isLoading={status === 'pending'} onAddBike={addBikeHandler} />
};

export default AddBike;