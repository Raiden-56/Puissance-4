import React from "react";
import styles from "./Jeton.module.css";

function Jeton({ state, play }: { state: number; play: () => any }) {
  function handleClick() {
    const response = play();
    if (!response) return alert("It seems that you can't play here !");
  }

  return (
    <div
      className={styles.container}
      style={{
        background: [0, 1].includes(state)
          ? state === 1
            ? "var(--color-red)"
            : "var(--color-yellow)"
          : "grey",
      }}
      onClick={handleClick}
    />
  );
}

export default Jeton;
