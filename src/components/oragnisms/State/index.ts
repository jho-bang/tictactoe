import { html, View } from "rune-ts";

import style from "./style.module.scss";

// types
import type { TPlayers } from "../../../types";
import { TextView } from "../../atoms";

interface Props {
  initPlayer: TPlayers;
}

export class StateView extends View<Props> {
  public changeState = (currentPlayer: TPlayers) => {
    const elem = document.querySelector(`.${this}`);
    if (elem) {
      elem.innerHTML = "";
      elem.append(
        new TextView({
          children: `${currentPlayer} 차례`,
          mode: "underline",
          type: "secondary",
        }).render(),
      );
    }
  };

  override template({ initPlayer }: Props) {
    return html`<div class="${style.status}">
      ${new TextView({
        children: `${initPlayer} 차례`,
        mode: "underline",
        type: "secondary",
      })}
    </div>`;
  }
}
