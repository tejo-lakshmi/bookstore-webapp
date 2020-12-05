import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/Home/HomePage";
import Header from "./components/LogoHeading/Header";
import LoginPage from "./components/LoginPage/LoginPage"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/register"></Route>
          <Route path="/login"><LoginPage></LoginPage></Route>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
