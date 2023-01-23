import { DefaultThemes, isTheme, ThemeOptions } from "~/constants";

export const setTheme = (theme: ThemeOptions) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

export const getTheme = () => {
  const themeFromLocalStorage = localStorage.getItem("theme");
  if (themeFromLocalStorage === null) {
    const isDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return isDarkMode ? DefaultThemes.Dark : DefaultThemes.Light;
  }

  if (isTheme(themeFromLocalStorage)) {
    return themeFromLocalStorage;
  } else {
    const isDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return isDarkMode ? DefaultThemes.Dark : DefaultThemes.Light;
  }
};
