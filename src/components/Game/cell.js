import styles from "./Game.module.css";
import { useGamePost } from "../../hooks/useGamePost";
import { fetchGame } from "../../hooks/useGamePost";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import QuestionIcon from "./svgs/question-icon.svg";
import MineIcon from "./svgs/mine-icon.svg";
import I0 from "./svgs/0-icon.svg";
import I1 from "./svgs/1-icon.svg";
import I2 from "./svgs/2-icon.svg";
import I3 from "./svgs/3-icon.svg";
import I4 from "./svgs/4-icon.svg";
import I5 from "./svgs/5-icon.svg";
import I6 from "./svgs/6-icon.svg";
import I7 from "./svgs/7-icon.svg";
import I8 from "./svgs/8-icon.svg";

export default function Cell({ cell, iY, iX }) {
  const queryClient = useQueryClient();

  const newGame = useMutation(fetchGame, {
    onSuccess: (data) => {
      queryClient.setQueryData(["game"], data);
    },
  });

  function handleTurn(e) {
    e.preventDefault();
    newGame.mutate({ x: iX, y: iY });
  }

  return (
    <button
      onClick={handleTurn}
      className={
        //  new and better (probably) way to style the cells
        iY % 2 === 0 ? styles.cell_even : styles.cell_odd

        // this monstrosity makes the board follow a chess pattern
        // iY % 2 === 0
        //   ? iX % 2 === 0
        //     ? styles.cell_dark
        //     : styles.cell
        //   : iX % 2 !== 0
        //   ? styles.cell_dark
        //   : styles.cell
      }
    >
      {cell === false ? (
        <QuestionIcon />
      ) : cell === "m" ? (
        <MineIcon />
      ) : cell === 0 ? (
        <I0 className={styles.I0} />
      ) : cell === 1 ? (
        <I1 className={styles.I1} />
      ) : cell === 2 ? (
        <I2 className={styles.I2} />
      ) : cell === 3 ? (
        <I3 className={styles.I3} />
      ) : cell === 4 ? (
        <I4 className={styles.I4} />
      ) : cell === 5 ? (
        <I5 className={styles.I5} />
      ) : cell === 6 ? (
        <I6 className={styles.I6} />
      ) : cell === 7 ? (
        <I7 className={styles.I7} />
      ) : (
        cell === 8 && <I8 className={styles.I8} />
      )}
    </button>
  );
}
