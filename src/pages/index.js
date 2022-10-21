import styles from "../styles/Home.module.css";
import { useState, useEffect, useRef } from "react";

import useWindowSize from "../hooks/useWindowSize";

import Hero from "../components/Hero/index";

export default function Home() {
  // hook that gets window width and height and listens to its change
  const size = useWindowSize();
  const columnsRef = useRef(null);
  const rowsRef = useRef(null);

  const [tiles, setTiles] = useState([]);

  // figure out the number of decorative tiles to create and columns/rows in css grid to accomodate them
  useEffect(() => {
    columnsRef.current = Math.floor(
      size.width > 800 ? size.width / 100 : size.width / 50
    );
    rowsRef.current = Math.floor(
      size.height > 800 ? size.height / 100 : size.height / 50
    );
    if (!isNaN(columnsRef.current) && !isNaN(rowsRef.current)) {
      document.documentElement.style.setProperty(
        "--columns",
        columnsRef.current
      );
      document.documentElement.style.setProperty("--rows", rowsRef);
      setTiles(Array.from(Array(columnsRef.current * rowsRef.current).keys()));
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
