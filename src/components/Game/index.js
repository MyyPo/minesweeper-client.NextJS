import styles from "./Game.module.css";
import { useState, useEffect, useMemo } from "react";
import anime from "animejs";

import { useGameGet } from "../../hooks/useGameGet";
import { handleLogout } from "../../utils/handleLogout";
import GameBoard from "./gameBoard";
import GameOptions from "./gameOptions";

function Game() {
  const { data, isLoading, isFetching } = useGameGet();
  const [gameCells, setGameCells] = useState(null);
  const [boardReady, setBoardReady] = useState(false);

  // figure out how big gameboard should be
  useEffect(() => {
    if (!isLoading) {
      console.log(data);
      setGameCells(data.width);
    }
  }, [data, isLoading]);

  useEffect(() => {
    if (gameCells) {
      document.documentElement.style.setProperty("--game-cells", gameCells);
      // prevent the gameboard from flashing too much without the grid properties
      setBoardReady(true);
    }
  }, [gameCells]);

  return (
    <div className={styles.container}>
      {!isLoading && boardReady ? (
        <GameBoard data={data} />
      ) : (
        !isLoading && data === "nogame" && <GameOptions />
      )}
    </div>
  );
}

export default Game;
