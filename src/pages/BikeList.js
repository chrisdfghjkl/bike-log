import AllBikes from "../components/bikes/AllBikes";

const SEED_BIKES = [
  { id: 'b1', make: 'Poseidon', model: 'Flatbar X', year: '2021', style: 'Gravel' },
  { id: 'b2', make: 'Kona', model: 'Dew Plus', year: '2020', style: 'Commuter' }
]

const BikeList = () => {
  return <AllBikes bikes={SEED_BIKES} />
};

export default BikeList;