import js from '@eslint/js'
import globals from 'globals'
import pluginReact from 'eslint-plugin-react' // <-- 1. เพิ่ม import นี้
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      pluginReact.configs.flat.recommended, // <-- 2. เพิ่ม config นี้
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      // เนื่องจากเราใช้ React 17+ (Vite) เราไม่จำเป็นต้อง import React ทุกไฟล์
      'react/react-in-jsx-scope': 'off', // <-- 3. (แนะนำ) เพิ่มกฎนี้
    },
  },
])