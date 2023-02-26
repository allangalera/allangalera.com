
module.exports = {
    extends: [
      "plugin:astro/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    plugins: ["prettier", "@typescript-eslint"],
    parser: '@typescript-eslint/parser',
    rules: {
      "@typescript-eslint/switch-exhaustiveness-check": "warn",
      "prettier/prettier": "error"
    },
    parserOptions: {
      project: true,
      tsconfigRootDir: __dirname,
    },
    overrides: [
      {
        files: ["*.astro"],
        parser: "astro-eslint-parser",
        parserOptions: {
          parser: "@typescript-eslint/parser",
          extraFileExtensions: [".astro"],
        },
        rules: {
          "prettier/prettier": "off",
          "@typescript-eslint/no-unsafe-assignment": "off"
        },
      },
    ],
  }