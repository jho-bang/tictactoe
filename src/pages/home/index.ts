import { Page, html } from "rune-ts";

import {
  ResetButtonView,
  SquareListView,
  StateView,
  TitleView,
} from "../../components";

export class TicTacToePage extends Page<object> {
  stateView = new StateView({ initPlayer: "X" });
  squareListView = new SquareListView({
    changeCurrentPlayer: this.stateView.changeState,
  });

  override template() {
    return html`<div>
      <div>${new TitleView({ title: "와아 틱택토!" })}</div>
      <div>${this.stateView}</div>
      <div id="board">
        <div>${this.squareListView}</div>
        <div>
          ${new ResetButtonView({
            reset: this.squareListView.resetState,
          })}
        </div>
      </div>
    </div>`;
  }
}
