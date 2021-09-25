import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// Views
import Weather from "./Views/Weather";
import CountryInformation from "./Views/CountryInformation";
import Home from "./Views/Home";
import SearchCountry from "./Views/SearchCountry";


const App =()=>{
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/SearchCountry" exact>
          <SearchCountry />
        </Route>
        <Route path="/CountryInformation/:name" exact>
          <CountryInformation />
        </Route>
        <Route path="/Weather/:capital" exact>
          <Weather />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
