import getColumn from "./getColumn";

function isThereAWinner(game: number[][]): boolean {
  const columns = game.map((_, i) => getColumn(game, i));
  const rows = [...game];

  return true;
}

export default isThereAWinner;
