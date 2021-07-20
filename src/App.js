import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/HomepageComponents/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuPage from "./components/MenuPageComponents/Menupage";
import AboutPage from "./components/AboutComponents/Aboutpage";
import './App.css';




function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
