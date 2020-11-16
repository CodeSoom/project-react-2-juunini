module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'standard',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    context: 'readonly',
    Feature: 'readonly',
    Scenario: 'readonly',
    actor: 'readonly',
    given: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.d.ts', '.ts', '.tsx']
			}
    },
    react: {
      version: 'latest',
    },
	},
  rules: {
    indent: ['error', 2],
    'no-trailing-spaces': 'error',
    curly: 'error',
    'brace-style': 'error',
    'no-multi-spaces': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'no-whitespace-before-property': 'error',
    'func-call-spacing': 'error',
    'space-before-blocks': 'error',
    'keyword-spacing': ['error', { before: true, after: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-in-parens': ['error', 'never'],
    'block-spacing': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { mode: 'strict' }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'react/prop-types': 'off',
    'linebreak-style': 'off',
    'no-proto': 'off',
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'import/extensions': [
			'error',
			'ignorePackages',
			{ js: 'never', jsx: 'never', ts: 'never', tsx: 'never', json: 'never' }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};