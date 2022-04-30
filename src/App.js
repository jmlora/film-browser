import React from "react";
import styles from "./styles.module.scss";
import { CardList } from "./components/CardList/CardList";

const apidata = [
  {
    title: "Girsl",
    description:
      "This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.",
    thumbnail:
      "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg"
  },
  {
    title: "Shining Girls",
    description:
      "Shining Girls is a metaphysical thriller, which follows a Chicago reporter who survived a brutal assault only to find her reality shifting as she hunts down her attacker.",
    thumbnail:
      "https://static.tvmaze.com/uploads/images/medium_portrait/406/1015813.jpg"
  }
];
export default function App() {
  return (
    <div className={styles.App}>
      <h1>Film list</h1>
      <CardList filmdata={apidata} />
    </div>
  );
}
