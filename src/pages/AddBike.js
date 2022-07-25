import BikeForm from "../components/bikes/BikeForm";

const AddBike = () => {
  const addBikeHandler = bikeData => {
    console.log(bikeData);
  };


  return <BikeForm onAddBike={addBikeHandler} />
};

export default AddBike;