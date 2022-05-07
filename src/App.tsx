import React from "react";
import styles from "./styles.module.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { FilmDetails } from "./pages/FilmDetails/FilmDetails";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/film/:filmid">
          <FilmDetails />
        </Route>
      </Router>
    </div>
  );
}

export { App };
