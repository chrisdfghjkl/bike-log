import React from "react";
import NavBar from "./components/UI/NavBar";
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Switch>
      {/* <NavBar /> */}
      <Route path='/'>

      </Route>
      <Route path='/bikes'>

      </Route>
      <Route path='/bikes/:bikeId'>

      </Route>
      <Route path='/add-bike'>

      </Route>
    </Switch>
  );
}

export default App;
