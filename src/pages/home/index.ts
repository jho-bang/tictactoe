import { Page, html } from "rune-ts";

import { TictactoeTemplate } from "../../components";

export class TicTacToePage extends Page<object> {
  override template() {
    return html`<div>${new TictactoeTemplate({})}</div>`;
  }
}
