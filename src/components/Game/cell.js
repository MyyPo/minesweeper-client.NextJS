import styles from "./Game.module.css";

import QuestionIcon from "./svgs/question-icon.svg";
import I0 from "./svgs/0-icon.svg";
import I1 from "./svgs/1-icon.svg";
import I2 from "./svgs/2-icon.svg";
import I3 from "./svgs/3-icon.svg";
import I4 from "./svgs/4-icon.svg";
import I5 from "./svgs/5-icon.svg";
import I6 from "./svgs/6-icon.svg";
import I7 from "./svgs/7-icon.svg";
import I8 from "./svgs/8-icon.svg";

export default function Cell({ cell }) {
  return (
    <button className={styles.cell}>
      {cell === false ? (
        <QuestionIcon />
      ) : cell === 0 ? (
        <I0 />
      ) : cell === 1 ? (
        <I1 />
      ) : cell === 2 ? (
        <I2 />
      ) : cell === 3 ? (
        <I3 />
      ) : cell === 4 ? (
        <I4 />
      ) : cell === 5 ? (
        <I5 />
      ) : cell === 6 ? (
        <I6 />
      ) : cell === 7 ? (
        <I7 />
      ) : (
        cell === 8 && <I8 />
      )}
    </button>
  );
}
