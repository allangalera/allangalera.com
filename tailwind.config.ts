// /** @type {import('tailwindcss').Config} */

// module.exports = {
// 	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [require('@tailwindcss/typography'), require("daisyui")],
// 	daisyui: {
// 		themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
// 	}
// }

import tailwindTypo from "@tailwindcss/typography";
import daisyui from "daisyui";

import { themes } from "./src/constants";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindTypo, daisyui],
  daisyui: {
    themes,
  },
};