module.exports = {
  defaultSeverity: 'warning',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
  ],
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'at-rule-no-vendor-prefix': true,
    'color-hex-length': 'long',
    'declaration-colon-space-after': 'always-single-line',
    'max-nesting-depth': 3,
    'media-feature-name-no-vendor-prefix': true,
    // 'order/properties-alphabetical-order': false,
    'property-no-vendor-prefix': true,
    'selector-class-pattern': [
      '^[a-z0-9\\-_]+$',
      {
        message:
          'Selector should be written in lowercase with hyphens (selector-class-pattern)',
      },
    ],
    'selector-list-comma-newline-after': 'always',
    'selector-no-vendor-prefix': true,
    'value-list-comma-newline-after': 'always-multi-line',
    'value-no-vendor-prefix': true,
  },
}
