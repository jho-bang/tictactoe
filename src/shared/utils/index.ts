export function extHexToRGB(hex: string, alpha?: number) {
  if (!hex) return "";

  let r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

export function darkenColor(color: string, percent: number) {
  let f = parseInt(color.slice(1), 16),
    R = f >> 16,
    G = (f >> 8) & 0x00ff,
    B = f & 0x0000ff;

  R = Math.floor((R * (100 - percent)) / 100);
  G = Math.floor((G * (100 - percent)) / 100);
  B = Math.floor((B * (100 - percent)) / 100);

  return "#" + ((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1);
}

export function lightenColor(color: string, percent: number) {
  let f = parseInt(color.slice(1), 16),
    R = f >> 16,
    G = (f >> 8) & 0x00ff,
    B = f & 0x0000ff;

  R = Math.floor(R + (255 - R) * (percent / 100));
  G = Math.floor(G + (255 - G) * (percent / 100));
  B = Math.floor(B + (255 - B) * (percent / 100));

  return "#" + ((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1);
}
