import { Page, html } from "rune-ts";

import {
  ResetButtonView,
  SquareListView,
  StateView,
  TitleView,
} from "../../components";

import style from "./style.module.scss";

export class HomePage extends Page<object> {
  private stateView = new StateView({ initPlayer: "X" });
  private squareListView = new SquareListView({
    changeCurrentPlayer: this.stateView.changeState,
  });

  override template() {
    return html`<div>
      <div class="${style.title}">
        ${new TitleView({ children: "와아 틱택토!", level: 1 })}
      </div>
      ${this.stateView} ${this.squareListView}
      ${new ResetButtonView({
        reset: this.squareListView.resetState,
      })}
    </div>`;
  }
}
