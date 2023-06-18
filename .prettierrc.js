module.exports = {
  singleQuote: true,
  arrowParens: "avoid",
  trailingComma: "es5",
  bracketSameLine: true,
  printWidth: 120,
  overrides: [
    {
      files: ["**/*.css", "**/*.scss", "**/*.html"],
      options: {
        singleQuote: false,
      },
    },
  ],
};
