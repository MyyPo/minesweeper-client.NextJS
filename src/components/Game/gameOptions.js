import styles from "./Game.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createRanked } from "../../utils/createRanked";

function GameOptions() {
  const queryClient = useQueryClient();
  const newGame = useMutation(createRanked, {
    onSuccess: (data) => {
      queryClient.setQueryData(["game"], data);
    },
  });

  function handleCreateRanked(e) {
    e.preventDefault();
    newGame.mutate();
  }

  return (
    <div className={styles.options}>
      <button onClick={handleCreateRanked} className={styles.button_ranked}>
        Create a regular game
      </button>
    </div>
  );
}

export default GameOptions;
