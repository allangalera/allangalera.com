import * as Belt from "@mobily/ts-belt";

export const THEME_OPTIONS = {
  Light: "light",
  Dark: "dark",
  System: "system",
} as const;

export const themes = Belt.D.values(THEME_OPTIONS);
