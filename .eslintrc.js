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
    'react', 'tailwindcss',
  ],
  rules: {
    'react/jsx-props-no-spreading': [0],
    'react/prop-types': [0],
    'react/no-unknown-property': [2, { ignore: ['jsx', 'global'] }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        // aspects: ['noHref', 'invalidHref', 'preferButton'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },

  settings: {
    'import/resolver': {
      node: {
        paths: [
          '.',
        ],
      },
    },
  },
};
