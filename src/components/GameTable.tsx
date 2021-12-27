import Jeton from "./Jeton";
import React, { useState } from "react";
import styles from "./GameTable.module.css";
import getColumn from "../functions/getColumn";
import isThereAWinner from "../functions/isThereAWinner";

function GameTable() {
  const [game, setGame] = useState<number[][]>([
    [-1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1],
  ]);

  const [player, setPlayer] = useState<0 | 1>(0);

  function play(rowIndex: number, positionInRow: number) {
    const playablePosInRow = getPlayPose(rowIndex, positionInRow);
    if (playablePosInRow === null) return false;
    setGame((previousGame) => {
      const newGame = JSON.parse(JSON.stringify(previousGame));
      newGame[playablePosInRow][positionInRow] = player;
      return newGame;
    });
    if (isThereAWinner(game)) return alert(`GAME ENDED, WINNER IS: ${player}`);
    setPlayer(player === 1 ? 0 : 1);
    return true;
  }

  function getPlayPose(rowIndex: number, positionInRow: number) {
    console.log(rowIndex, positionInRow);
    let rowIndexToPlay: number | null = null;
    const column = getColumn(game, positionInRow);
    if (!column.includes(-1)) return rowIndexToPlay;
    for (let i = 0; i < 6; i++) {
      console.log("I:", column[i]);
      if (column[i] !== -1) {
        rowIndexToPlay = i - 1;
        break;
      }
    }
    console.log("Row Index: ", rowIndexToPlay === null ? 5 : rowIndexToPlay);
    return rowIndexToPlay === null ? 5 : rowIndexToPlay;
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.player}
        style={
          player === 1
            ? { backgroundColor: "var(--color-red)", color: "white" }
            : { backgroundColor: "var(--color-yellow)", color: "black" }
        }
      >
        Player: {player}
      </div>
      <div className={styles.table}>
        {game.map((row, rowIndex) =>
          row.map((box, positionInRow) => (
            <Jeton
              key={"row" + rowIndex + "box" + positionInRow}
              state={box}
              play={play.bind(null, rowIndex, positionInRow)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default GameTable;
