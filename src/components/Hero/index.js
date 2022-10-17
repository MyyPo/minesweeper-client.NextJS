import styles from "./Hero.module.css";
import { useState, useEffect, useReducer } from "react";
import { useSession } from "next-auth/react";

import Game from "../Game";
import Tile from "./tile";
import Auth from "../Auth";
import useWindowSize from "../../hooks/useWindowSize";
import useAuthContext from "../../hooks/useAuthContext";

function Hero() {
  // check a non-http-only cookie that comes together with an http-only one to figure out if the user is logged in
  const { status } = useAuthContext();
  console.log(status);
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
          <Tile key={i}></Tile>
        ))}
      </div>
      {/* Handles authentication login/registration */}
      {status === undefined && <Auth />}
      {status && <Game />}
    </>
  );
}

export default Hero;
