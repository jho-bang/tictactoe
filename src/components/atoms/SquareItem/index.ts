// base
import { View, html, CustomEventWithDetail } from "rune-ts";

// css
import style from "./style.module.scss";

// types
import type { TPlayers } from "../../../types";

export class RequestEvent extends CustomEventWithDetail<TPlayers> {}

export interface ISquareItemProps {
  value: number;
}

export class SquareView extends View<ISquareItemProps> {
  override template({ value }: ISquareItemProps) {
    return html`<div
      class="${style.square} square"
      id="square_${value}"
    ></div>`;
  }
}
