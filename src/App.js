import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";
import BikeDetails from "./pages/BikeDetails";
import BikeList from "./pages/BikeList";
import AddBike from "./pages/AddBike";
import Layout from "./components/layout/Layout";

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
        <Route path='/bikes' exact>
          <BikeList />
        </Route>
        <Route path='/bikes/:bikeId'>
          <BikeDetails />
        </Route>
        <Route path='/add-bike'>
          <AddBike />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
