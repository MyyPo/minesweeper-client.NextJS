import styles from "./Game.module.css";

import XIcon from "../Auth/svgs/x_icon.svg";

function GameOver({ setGameOver }) {
  function closeWindowHandler(e) {
    e.preventDefault();
    setGameOver(false);
  }

  return (
    <div className={styles.game_over}>
      <button className={styles.close_button} onClick={closeWindowHandler}>
        <XIcon className={styles.x_icon} />
      </button>
      <p className={styles.game_over_text}>Game over</p>
    </div>
  );
}

export default GameOver;
