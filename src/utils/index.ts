import { THEME_OPTIONS, themes } from '@/constants';
import type { ThemeOptions } from '@/types';

export const isTheme = (value: string): value is ThemeOptions => {
  return themes.includes(value);
};

export const getCurrentSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? THEME_OPTIONS.Dark
    : THEME_OPTIONS.Light;
};

export const setTheme = (theme: ThemeOptions): void => {
  switch (theme) {
    case THEME_OPTIONS.Dark:
      document.documentElement.classList.add(THEME_OPTIONS.Dark);
      break;
    case THEME_OPTIONS.System:
      if (getCurrentSystemTheme() === THEME_OPTIONS.Dark) {
        document.documentElement.classList.add(THEME_OPTIONS.Dark);
      } else {
        document.documentElement.classList.remove(THEME_OPTIONS.Dark);
      }
      break;
    case THEME_OPTIONS.Light:
      document.documentElement.classList.remove(THEME_OPTIONS.Dark);
  }

  localStorage.setItem('theme', theme);
};

export const getTheme = (): ThemeOptions => {
  const themeFromLocalStorage = localStorage.getItem('theme');
  if (themeFromLocalStorage == null || !isTheme(themeFromLocalStorage)) {
    return THEME_OPTIONS.System;
  }

  return themeFromLocalStorage;
};

export const chunkify = <T extends Array<unknown | never>>(
  items: T,
  { pageSize } = { pageSize: 10 },
) => {
  const chunks: Array<T> = [];

  items.forEach((item, index) => {
    const chunkIndex = Math.floor(index / pageSize);
    if (!chunks[chunkIndex]) {
      chunks[chunkIndex] = [];
    }

    chunks[chunkIndex].push(item);
  });

  return chunks;
};

export const IS_NODE_PRODUCTION = process.env.NODE_ENV === 'production';
export const IS_NODE_DEVELOPMENT = process.env.NODE_ENV === 'development';
