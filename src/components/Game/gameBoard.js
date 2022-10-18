import styles from "./Game.module.css";
import Cell from "./cell";

function GameBoard({ data }) {
  return (
    <div className={styles.cells}>
      {/* unpack a two-layer deep array in order to get all of its contents, where [y][x] */}
      {data?.uncoveredField?.map((row, iY) =>
        row.map((cell, iX) => (
          <Cell cell={cell} iY={iY} iX={iX} key={iY + iX} />
        ))
      )}
    </div>
  );
}

export default GameBoard;
