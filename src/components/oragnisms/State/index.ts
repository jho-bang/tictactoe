import { html, View } from "rune-ts";

import style from "./style.module.scss";

// types
import type { TPlayers } from "../../../types";

interface Props {
  initPlayer: TPlayers;
}

export class StateView extends View<Props> {
  public changeState = (currentPlayer: TPlayers) => {
    const elem = document.querySelector(`.${this}`);
    if (elem) {
      elem.innerHTML = `${currentPlayer} 차례`;
    }
  };

  override template({ initPlayer }: Props) {
    return html` <h3 class="${style.status}">${initPlayer} 차례</h3> `;
  }
}
