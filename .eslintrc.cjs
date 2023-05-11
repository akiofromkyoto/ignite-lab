module.exports = {
  env: {  es6: true,
    // seu ambiente, node e/ou navegador:
    node: true,
    browser: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: {
    jsx: true 
  }},
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
  
}
