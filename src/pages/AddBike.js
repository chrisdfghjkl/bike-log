import { useHistory } from "react-router-dom";

import BikeForm from "../components/bikes/BikeForm";

const AddBike = () => {
  const history = useHistory();

  const addBikeHandler = (bikeData) => {
    console.log(bikeData);

    history.push('/bikes')
  };


  return <BikeForm onAddBike={addBikeHandler} />
};

export default AddBike;