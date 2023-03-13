/** @type {import("prettier").Config} */
const config = {
  singleQuote: true,
  trailingComma: "all",
  arrowParens: "always",
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
