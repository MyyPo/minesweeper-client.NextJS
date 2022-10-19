import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import anime from "animejs";

import useWindowSize from "../hooks/useWindowSize";

import Hero from "../components/Hero/index";

export default function Home() {
  // hook that gets window width and height and listens to its change
  const size = useWindowSize();

  const [tiles, setTiles] = useState([]);

  // figure out the number of decorative tiles to create and columns/rows in css grid to accomodate them
  useEffect(() => {
    let columns;
    let rows;
    columns = Math.floor(size.width > 800 ? size.width / 100 : size.width / 50);
    rows = Math.floor(size.height > 800 ? size.height / 100 : size.height / 50);
    if (!isNaN(columns) && !isNaN(rows)) {
      document.documentElement.style.setProperty("--columns", columns);
      document.documentElement.style.setProperty("--rows", rows);
      setTiles(Array.from(Array(columns * rows).keys()));
    }
  }, [size]);

  return (
    <>
      {/* Creates a responsive decorative tile background */}
      <div className={styles.tiles}>
        {tiles.map((tile, i) => (
          <div className={styles.tile} key={i}></div>
        ))}
      </div>
      <Hero />
    </>
  );
}
