// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import importPlugin from 'eslint-plugin-import';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintConfigPrettier from 'eslint-config-prettier';
import unusedPlugin from 'eslint-plugin-unused-imports';
// import * as mdx from 'eslint-plugin-mdx';
export default defineConfig([
  globalIgnores([
    '**/node_modules/',
    '**/types/**/*',
    '**/type-policies.ts',
    '**/.hygen/',
    '**/scripts/',
    '.hygen.js',
    'playwright/auth.js',
    '**/node_modules',
    '**/dist',
    '**/.vite',
    'src/graphql/types/index.ts',
    'src/graphql/types/index.mock.ts',
    'src/graphql/enums/index.ts',
    'src/graphql/hooks/index.ts',
    'src/graphql/__schema__.graphql',
    'src/graphql/**/*.gql',
  ]),
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactRefresh.configs.recommended,
  // ...mdx.flat,
  eslintConfigPrettier,
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.app.json',
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        React: 'readonly',
      },
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    plugins: {
      'react-hooks': reactHooks,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedPlugin,
      import: importPlugin, // Add import plugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      // Add this settings section
      'import/resolver': {
        typescript: {
          project: './tsconfig.app.json',
          alwaysTryTypes: true,
        },
        node: true,
      },
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
    },
    rules: {
      'import/no-duplicates': 'error',
      'import/no-extraneous-dependencies': 'off',
      'import/no-internal-modules': 'off',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'import/order': 'off',
      'sort-imports': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'react-refresh/only-export-components': 'warn',
      'lines-between-class-members': ['error', 'always'],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/display-name': [
        'error',
        {
          ignoreTranspilerName: false, // Force displayName even for named components
        },
      ],
      'react/prop-types': 'off',
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: 'directive',
          next: '*',
        },
        {
          blankLine: 'any',
          prev: 'directive',
          next: 'directive',
        },
        {
          blankLine: 'always',
          prev: 'import',
          next: '*',
        },
        {
          blankLine: 'any',
          prev: 'import',
          next: 'import',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: ['const', 'let', 'var'],
        },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        {
          blankLine: 'always',
          prev: '*',
          next: ['class', 'if', 'while', 'switch', 'try'],
        },
        {
          blankLine: 'always',
          prev: ['class', 'if', 'while', 'switch', 'try'],
          next: '*',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
      ],

      'no-restricted-imports': [
        'error',
        {
          paths: ['lodash', 'classnames'],
        },
      ],

      'no-console': [
        'error',
        {
          allow: ['warn', 'error'],
        },
      ],
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-confusing-void-expression': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['playwright/**/*.ts'],

    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: './playwright/tsconfig.json',
      },
    },

    rules: {
      'no-console': 'off',
    },
  },
  {
    files: ['src/**/*.test.*', 'src/**/*.stories.*'],

    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
]);
