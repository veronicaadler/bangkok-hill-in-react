import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Homepage from "./components/HomepageComponents/Homepage";
import MenuPage from "./components/MenuPageComponents/Menupage";
import AboutPage from "./components/AboutComponents/Aboutpage";
import OrderNow from './components/OrderComponents/Order';
import "./App.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <Switch location={location}>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/menu">
              <MenuPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path='/order'>
              <OrderNow />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
