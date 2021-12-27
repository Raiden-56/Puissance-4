import React, { useRef } from "react";
import styles from "./Jeton.module.css";

function Jeton({
  state,
  play,
  player,
}: {
  state: number;
  play: () => any;
  player: 0 | 1;
}) {
  const AlreadyPlayed = useRef<boolean>(false);

  function handleClick() {
    // if (AlreadyPlayed.current)
    // return console.log("Already Played here connard");
    play();
    AlreadyPlayed.current = true;
    /*
      Play function should return a response with true / false
      True if everything is ok and the player can play
      False if he can't play in this place (Already Played)
      */
  }

  const playersColrs = ["#ff0000", "#ffff00"];

  return (
    <div
      className={styles.container}
      style={{
        background: [0, 1].includes(state)
          ? state === 1
            ? "#ff0000"
            : "#ffff00"
          : "grey",
      }}
      onClick={handleClick}
    >
      <div>{state}</div>
    </div>
  );
}

export default Jeton;
