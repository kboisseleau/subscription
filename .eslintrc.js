module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "semi": [ "error", "never", { "beforeStatementContinuationChars": "always" }],
      "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
      "prefer-arrow-callback": "error",
      "comma-dangle": ["error", "never"],
      "array-bracket-spacing": ["error", "always"],
      "no-multi-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "computed-property-spacing": ["error", "never"],
      "comma-spacing": ["error", { "before": false, "after": true }],
      "space-in-parens": ["error", "never"],
      "space-infix-ops": "error",
      "keyword-spacing": ["error", { "before": true, "after": true }],
      "space-before-function-paren": "error",
      "space-before-blocks": "error",
      "curly": "error",
      "brace-style": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "ignoreRestSiblings": true }],
      "@typescript-eslint/explicit-module-boundary-types": ["warn", { "allowArgumentsExplicitlyTypedAsAny": true }],
      "spaced-comment": ["error", "always", { "block": { "exceptions": ["-"] } }],
      "indent": "off",
      "@typescript-eslint/indent": [
        "error",
        2,
        {
            "SwitchCase": 1,
            "ignoredNodes": [
                "FunctionExpression > .params[decorators.length > 0]",
                "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
                "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key"
            ]
        }
      ],
      "object-shorthand": [ "error" ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "default",
          "format": ["camelCase"]
        },
        {
          "selector": "variable",
          "format": ["camelCase", "UPPER_CASE"]
        },
        {
          "selector": "memberLike",
          "modifiers": ["private"],
          "format": ["camelCase"],
          "leadingUnderscore": "require"
        },
        {
          "selector": "memberLike",
          "modifiers": ["protected"],
          "format": ["camelCase"],
          "leadingUnderscore": "require"
        },
        {
          "selector": "memberLike",
          "modifiers": ["public"],
          "format": ["camelCase"],
          "leadingUnderscore": "forbid"
        },
        {
          "selector": ["typeLike"],
          "format": ["PascalCase"]
        },
        {
          "selector": ["enum"],
          "format": ["UPPER_CASE"]
        },
        {
          "selector": "parameter",
          "format": ["camelCase"],
          "leadingUnderscore": "allow"
        },
        {
          "selector": ["objectLiteralProperty"],
          "format": ["camelCase", "PascalCase", "UPPER_CASE", "snake_case"]
        },
        {
          "selector": ["enumMember"],
          "format": ["camelCase"]
        },
        {
          "selector": [
            "objectLiteralProperty"
          ],
          "format": null,
          "modifiers": ["requiresQuotes"]
       }
      ]
  },
};

