module.exports = {
  env: {
    jest: true,
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'jest-enzyme',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript/base',
    'eslint:recommended',
    './config.json'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    "jsx-a11y/control-has-associated-label": 'off',
    'import/no-unresolved': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 'off',
    "react/jsx-fragments": 'off',
    "no-multiple-empty-lines": ['error', { "max": 2 }],
    "react/state-in-constructor": ['error', 'never'],
    "react/jsx-props-no-spreading": 'off',
    "arrow-parens": ['error', 'as-needed'],
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'react/forbid-prop-types': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowTernary: true,
      },
    ],
    'react/prop-types': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false, classes: true, variables: true, typedefs: true,
      },
    ],
  },
};
