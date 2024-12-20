module.exports= {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [function ({ addBase, theme }) {
    function extractColorVars (colorObj, colorGroup = '') {
      return Object.keys(colorObj).reduce((vars, colorKey) => {
        const value = colorObj[colorKey];
        const cssVariable = colorKey === "DEFAULT" ? `--color${colorGroup}` : `--color${colorGroup}-${colorKey}`;

        const newVars =
          typeof value === 'string'
            ? { [cssVariable]: value }
            : extractColorVars(value, `-${colorKey}`);

        return { ...vars, ...newVars };
      }, {});
    }

    addBase({
      ':root': extractColorVars(theme('colors')),
    });
  }],
};
