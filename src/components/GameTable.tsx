import Jeton from "./Jeton";
import React, { useState } from "react";
import styles from "./GameTable.module.css";

function GameTable() {
  function arrayColumn(matrix: number[][], col: number) {
    var column = [];
    for (var i = 0; i < matrix.length; i++) {
      column.push(matrix[i][col]);
    }
    return column;
  }

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
    if (playablePosInRow === null)
      return console.log("No place where you can play");
    setGame((previousGame) => {
      const newGame = JSON.parse(JSON.stringify(previousGame));
      newGame[playablePosInRow][positionInRow] = player;
      setPlayer(player === 1 ? 0 : 1);
      return newGame;
    });
  }

  function getPlayPose(rowIndex: number, positionInRow: number) {
    console.log(rowIndex, positionInRow);
    let rowIndexToPlay: number | null = null;
    const column = arrayColumn(game, positionInRow);
    if (!column.includes(-1)) return rowIndexToPlay;
    for (let i = rowIndex; i < 6; i++) {
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
      {game.map((row, rowIndex) =>
        row.map((box, positionInRow) => (
          <Jeton
            key={"row" + rowIndex + "box" + positionInRow}
            state={box}
            play={play.bind(null, rowIndex, positionInRow)}
            player={player}
          />
        ))
      )}
    </div>
  );
}

export default GameTable;
