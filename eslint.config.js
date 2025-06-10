import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.browser },
  },
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-undef': 'error',
      'no-unused-vars': 'error',
      'no-empty': 'error',
      eqeqeq: 'error',
      curly: 'error',
    },
  },
]);
