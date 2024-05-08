// base
import { View, html, on } from "rune-ts";

// css
import style from "./style.module.scss";

import { ButtonDefault } from "../../atoms";

interface Props {
  reset: () => void;
}

export class ResetButtonView extends View<Props> {
  @on("click")
  private _onClick() {
    this.data.reset();
  }

  override template() {
    return html`
      <div class="${style.restartButton}">
        ${new ButtonDefault({
          text: "다시 시작",
          type: "primary",
          size: "large",
        })}
      </div>
    `;
  }
}
