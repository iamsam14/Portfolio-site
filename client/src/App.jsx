import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home'
import "./App.scss";

function App() {
  return (
  <div className="main-container">
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
