import Game from "./game";

export default interface IDrawable {
  render(game: Game): void;
}
