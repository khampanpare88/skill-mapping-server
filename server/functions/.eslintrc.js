module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    quotes: ["error", "double"],
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    "ecmaVersion": 8,
    "requireConfigFile": false,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "classes": true,
    },
  },
};
