import styles from "./Game.module.css";
import { useState, useEffect, useMemo } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import anime from "animejs";

import { useGameGet } from "../../hooks/useGameGet";
import { gamePost } from "../../utils/gamePost";
import GameOver from "./gameOver";
import GameOptions from "./gameOptions";
import Cell from "./cell";

function Game() {
  const [gameCells, setGameCells] = useState(null);
  const [boardReady, setBoardReady] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const { data, isLoading, isFetching } = useGameGet();
  const queryClient = useQueryClient();
  // react query mutations used for updating the game field after each turn
  const newGame = useMutation(gamePost, {
    onSuccess: (data) => {
      if (data.uncoveredField) {
        queryClient.setQueryData(["game"], data);
        // if game is lost show the user game over window and then start game window
        if (data.msg === "Game over") {
          setTimeout(() => {
            setGameOver(true);
          }, 1000);

          setTimeout(() => {
            setBoardReady(false);
            setGameOver(false);
            queryClient.refetchQueries(["game"]);
          }, 4 * 1000);
        }
      }
    },
  });

  // figure out how big gameboard should be
  useEffect(() => {
    if (!isLoading && data) {
      setGameCells(data.width);
    }
  }, [data, isLoading]);

  useEffect(() => {
    if (gameCells) {
      // set grid
      document.documentElement.style.setProperty("--game-cells", gameCells);
      // prevent the gameboard from flashing too much without the grid properties
      setBoardReady(true);
    }
  }, [gameCells]);

  function handleTurn(iX, iY, e) {
    e.preventDefault();
    newGame.mutate({ x: iX, y: iY });
  }

  return (
    <div className={styles.container}>
      {gameOver && <GameOver setGameOver={setGameOver} />}
      {!isLoading && boardReady ? (
        <div className={styles.cells}>
          {/* unpack a two-layer deep array in order to get all of its contents, where [y][x] */}
          {data?.uncoveredField?.map((row, iY) =>
            row.map((cell, iX) => (
              <div key={iY + iX} onClick={(e) => handleTurn(iX, iY, e)}>
                <Cell cell={cell} iY={iY} iX={iX} />
              </div>
            ))
          )}
        </div>
      ) : (
        // if the user doesn't have a game show them game creation window
        data === "nogame" && <GameOptions />
      )}
    </div>
  );
}

export default Game;
