import type { THEME_OPTIONS } from "@/constants";

export type ThemeOptions = (typeof THEME_OPTIONS)[keyof typeof THEME_OPTIONS];
