module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': 0,
    'no-restricted-exports': 0,
    'react/prop-types': 0,
    'no-console': 0,
    'react/jsx-no-constructed-context-values': 0,
    'no-param-reassign': 0,
    'no-alert': 0,
    'max-len': 0,
  },
};
