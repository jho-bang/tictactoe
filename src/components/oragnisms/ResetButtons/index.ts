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
          variant: "Filled",
          size: "md",
          radius: "md",
          color: "#4f5ee8",
          label: "다시 시작",
        })}
      </div>
    `;
  }
}
