module.exports = {
   env: {
      es2021: true,
      node: true,
   },
   extends: ['eslint:recommended', 'plugin:react/recommended'],
   overrides: [
      {
         env: {
            node: true,
         },
         files: ['.eslintrc.{js,cjs}'],
         parserOptions: {
            sourceType: 'script',
         },
      },
   ],
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   plugins: ['react'],
   rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      ident: ['error', 3],
      'comma-spacing': ['error', { before: false, after: true }],
   },
};
