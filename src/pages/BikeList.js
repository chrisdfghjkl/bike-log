import AllBikes from "../components/bikes/AllBikes";
import LoadingWheel from '../components/UI/LoadingWheel';
import NoBikes from "../components/bikes/NoBikes";

import useHttp from '../hooks/use-http';
import { getAllBikes } from '../lib/api';
import { useEffect } from "react";


const BikeList = () => {
  const { sendRequest, status, data: loadedBikes, error } = useHttp(
    getAllBikes, 
    true
    );

    useEffect(() => {
      sendRequest();
    }, [sendRequest]);

    if (status === 'pending') {
      return (
        <div className="centered">
          <LoadingWheel />
        </div>
      );
    }

    if (error) {
      return <p className="centered, focused">{error}</p>
    }

    if (status === 'completed' && (!loadedBikes || loadedBikes.length === 0)) {
      return <NoBikes />
    }
  
    return <AllBikes bikes={loadedBikes} />
};

export default BikeList;