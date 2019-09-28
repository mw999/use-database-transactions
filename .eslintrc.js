module.exports = {
  env: {
    es6: true,
    node: true,
    commonjs: true,
    jest: true
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {}
};
