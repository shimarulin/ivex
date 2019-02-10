module.exports = {
  extends: [
    '@platr/vue',
  ],
  rules: {
    'vue/no-parsing-error': [
      'error',
      {
        'x-invalid-end-tag': false,
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: [],
      },
    ],
  },
}
