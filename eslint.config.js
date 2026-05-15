// @ts-check
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import astro from 'eslint-plugin-astro'
import astroParser from 'astro-eslint-parser'

export default [
  // Ignore patterns
  {
    ignores: [
      'dist',
      'node_modules',
      '.astro',
      'tina/__generated__',
      'public',
      '.next',
      'build',
      '.env*',
      'coverage',
      '.turbo',
      '**/*.mdx'
    ]
  },

  // Global JavaScript baseline - all files
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,astro}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        URL: 'readonly'
      }
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-unused-vars': 'off'
    }
  },

  // TypeScript and TSX files
  {
    files: ['**/*.{ts,tsx}', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        tsconfigRootDir: process.cwd(),
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': typescript
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn'
    }
  },

  // Astro components
  {
    files: ['**/*.astro'],
    plugins: {
      astro
    },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        parser: typescriptParser
      },
      globals: {
        Astro: 'readonly'
      }
    },
    rules: {
      'astro/no-set-html-directive': 'warn'
    }
  },

]
