import styles from "./Game.module.css";
import { useState, useEffect, useMemo } from "react";
import { useGamePlay } from "../../hooks/useGamePlay";
import { useGameGet } from "../../hooks/useGameGet";
import anime from "animejs";

import Cell from "./cell";

function Game({}) {
  const [gameCells, setGameCells] = useState(16);
  let x, y;
  const { data, isLoading, isFetching } = useGamePlay(x, y);

  useEffect(() => {
    if (!isNaN(gameCells)) {
      document.documentElement.style.setProperty("--game-cells", gameCells);
    }
  }, [gameCells]);

  return (
    <div className={styles.container}>
      {!isLoading && (
        <div className={styles.cells}>
          {/* unpack a two-layer deep array in order to get all of its contents, where [y][x] */}
          {data.uncoveredField.map((row, iY) =>
            row.map((cell, iX) => <Cell cell={cell} key={iX} iY={iY} iX={iX} />)
          )}
        </div>
      )}
    </div>
  );
}

export default Game;
