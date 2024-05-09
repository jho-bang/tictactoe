// base
import { ListView, View, html, on, CustomEventWithDetail } from "rune-ts";
import { pipe, filter, map, takeWhile, toArray, each, range } from "@fxts/core";

// css
import style from "./style.module.scss";

// types
import type { ITicTacToeStore, TPlayers } from "../../../types";

const initialValues: ITicTacToeStore = {
  players: ["X", "O"],
  winning_combinations: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
  squares: [],
  currentPlayer: "X",
  isEndGame: false,
};

export class SquareListView extends View<{
  changeCurrentPlayer: (currentPlayer: TPlayers) => void;
}> {
  private state: ITicTacToeStore = { ...initialValues };

  public resetState = () => {
    pipe(
      document.querySelectorAll(`.${style.square}`),
      each((v) => (v.textContent = "")),
    );
    this.state = { ...initialValues };
  };

  @on("click", `.${style.square}`)
  private _click(ev: MouseEvent) {
    if (this.isEndGame() || this.isExists(ev)) return;

    this.updateSquares(ev);

    if (this.isWin() || this.isDraw()) {
      this.setIsEndGame(true);
      return;
    }

    this.setCurrentPlayer();
    this.data.changeCurrentPlayer(this.state.currentPlayer);
  }

  private isEndGame() {
    return this.state.isEndGame;
  }

  private setIsEndGame(isEndGame: boolean) {
    this.state.isEndGame = isEndGame;
  }

  private updateSquares(ev: Event) {
    const currentTarget = ev.currentTarget as HTMLElement;
    if (currentTarget) {
      currentTarget.textContent = this.state.currentPlayer;
    }

    this.state.squares = pipe(
      document.querySelectorAll(`.${style.square}`),
      map((v) => v.textContent || ""),
      toArray,
    );
  }

  private setCurrentPlayer() {
    this.state.currentPlayer =
      this.state.currentPlayer === this.state.players[0]
        ? this.state.players[1]
        : this.state.players[0];
  }

  private isExists(ev: MouseEvent) {
    const currentTarget = ev.currentTarget as HTMLElement;
    if (currentTarget) {
      return currentTarget.textContent;
    }
    return false;
  }

  private isWin() {
    const { currentPlayer, squares } = this.state;
    const compareSquare = ([a, b, c]: number[]) =>
      squares[a] === currentPlayer &&
      squares[b] === currentPlayer &&
      squares[c] === currentPlayer;

    const winning_combinations = this.state.winning_combinations;

    const result = pipe(
      winning_combinations,
      filter(compareSquare),
      takeWhile((v) => v.length),
      toArray,
    );

    const checkWin = !!result.length;

    if (checkWin) {
      alert(`${this.state.currentPlayer} 승리`);
    }

    return checkWin;
  }

  private isDraw() {
    const squares = this.state.squares;

    for (const content of squares) {
      if (content === "") {
        return false;
      }
    }
    alert("무승부");
    return true;
  }

  override template() {
    return html`<div class="${style.SquareListView}">
      ${pipe(
        range(0, 9),
        map((v) => html`<div class="${style.square}"></div>`),
        toArray,
      )}
    </div>`;
  }
}
