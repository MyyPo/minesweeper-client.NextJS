import handleCreateRanked from "../../utils/handleCreateRanked";
import styles from "./Game.module.css";

function GameOptions() {
  return (
    <div className={styles.options}>
      <button onClick={handleCreateRanked} className={styles.button_ranked}>
        Create a regular game
      </button>
    </div>
  );
}

export default GameOptions;
