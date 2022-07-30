import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";
import BikeDetails from "./pages/BikeDetails";
import BikeList from "./pages/BikeList";
import AddBike from "./pages/AddBike";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import LogIn from './pages/LogIn';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/login'>
          <LogIn />
        </Route>
        <Route path='/add-bike'>
          <AddBike />
        </Route>
        <Route path='/bikes' exact>
          <BikeList />
        </Route>
        <Route path='/bikes/:bikeId'>
          <BikeDetails />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
