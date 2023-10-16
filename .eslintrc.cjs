module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
  settings: {react: {version: '18.2'}},
  plugins: ['react-refresh', 'react', 'jsx-a11y', 'react-hooks', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],
    'react/prop-types': 'off', // prop-types 검사를 비활성화합니다.
    'react/jsx-key': 'warn',
    'no-unused-vars': 'warn',
    'react/jsx-no-target-blank': 'off',
  },
};
