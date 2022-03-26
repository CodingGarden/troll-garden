module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    browser: 'readonly',
    chrome: 'readonly',
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 0,
    camelcase: 0,
    'class-methods-use-this': 0,
    'no-param-reassign': 0,
  },
};
