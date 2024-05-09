import { html, View } from "rune-ts";

import style from "./style.module.scss";

export interface ITextProps {
  children: any;
  type?: "secondary" | "success" | "warning" | "danger" | "default";
  mode?: "delete" | "underline" | "italic" | "strong" | "default";
}

export class TextView extends View<ITextProps> {
  override template({
    children,
    type = "default",
    mode = "default",
  }: ITextProps) {
    return html`<span class="${style.text} ${style[type]} ${style[mode]}"
      >${children}</span
    >`;
  }
}
