import * as Belt from "@mobily/ts-belt";

export const ThemeOptions = {
  Light: "light",
  Dark: "dark",
  Cupcake: "cupcake",
  Bumblebee: "bumblebee",
  Emerald: "emerald",
  Corporate: "corporate",
  Synthwave: "synthwave",
  Retro: "retro",
  Cyberpunk: "cyberpunk",
  Valentine: "valentine",
  Halloween: "halloween",
  Garden: "garden",
  Forest: "forest",
  Aqua: "aqua",
  Lofi: "lofi",
  Pastel: "pastel",
  Fantasy: "fantasy",
  Wireframe: "wireframe",
  Black: "black",
  Luxury: "luxury",
  Dracula: "dracula",
  Cmyk: "cmyk",
  Autumn: "autumn",
  Business: "business",
  Acid: "acid",
  Lemonade: "lemonade",
  Night: "night",
  Coffee: "coffee",
  Winter: "winter",
} as const;

export const DefaultThemes = {
  Dark: ThemeOptions.Dracula,
  Light: ThemeOptions.Emerald,
} as const;

export const themes = Belt.D.values(ThemeOptions);

export type ThemeOptions = (typeof ThemeOptions)[keyof typeof ThemeOptions];

export const isTheme = (value: string): value is ThemeOptions => {
  return Belt.A.includes(themes, value);
};
