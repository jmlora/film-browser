import React from "react";
import styles from "./styles.module.scss";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { FilmDetails } from "./pages/FilmDetails/FilmDetails";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film/:filmid" element={<FilmDetails />} />
      </Routes>
    </div>
  );
}

export { App };
