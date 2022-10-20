import styles from "./Game.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { gamePost } from "../../utils/gamePost";

import XIcon from "../Auth/svgs/x_icon.svg";

function GameOver({ setGameOver, setBoardReady, restartTimeRef }) {
  const queryClient = useQueryClient();
  function handleCloseWindow(e) {
    e.preventDefault();
    setGameOver(false);
  }
  function handleGoMenu(e) {
    e.preventDefault();
    setBoardReady(false);
    setGameOver(false);
    // cleanup the restart timeout from the game component
    restartTimeRef.current && clearTimeout(restartTimeRef.current);
    queryClient.refetchQueries(["game"]);
  }

  return (
    <div className={styles.game_over}>
      <button className={styles.close_button} onClick={handleCloseWindow}>
        <XIcon className={styles.x_icon} />
      </button>
      <p className={styles.game_over_text}>Game over</p>
      <button className={styles.restart_button} onClick={handleGoMenu}>
        Back to menu
      </button>
    </div>
  );
}

export default GameOver;
