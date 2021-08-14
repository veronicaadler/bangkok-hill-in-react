import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Homepage from "./components/HomepageComponents/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuPage from "./components/MenuPageComponents/Menupage";
import AboutPage from "./components/AboutComponents/Aboutpage";
import "./App.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
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
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default App;
