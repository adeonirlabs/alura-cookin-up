/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['import', 'simple-import-sort', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/default': 'off',
    'import/export': 'off',
    'import/first': 'error',
    'import/namespace': 'off',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-duplicates': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'no-else-return': 'warn',
    'no-var': 'error',
    'object-shorthand': 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  }
}
