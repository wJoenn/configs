import tseslint from "typescript-eslint"
import stylisticTS from "@stylistic/eslint-plugin-ts"
import base from "./base.js"

export default tseslint.config(
  base,
  {
    files: ["**/*.ts", "**/*.vue"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        extraFileExtensions: [".vue"],
        project: ["./tsconfig.json", "./tsconfig.*.json"]
      }
    },
    plugins: {
      "@stylistic/ts": stylisticTS,
      "@typescript-eslint": tseslint.plugin
    },
    rules: {
      "default-param-last": "off",
      "dot-notation": "off",
      "no-empty-function": "off",
      "no-implied-eval": "off",
      "no-invalid-this": "off",
      "no-loop-func": "off",
      "no-loss-of-precision": "off",
      "no-redeclare": "off",
      "no-shadow": "off",
      "no-throw-literal": "off",
      "no-undef": "off",
      "no-unused-expressions": "off",
      "no-unused-vars": "off",
      "no-use-before-define": "off",
      "no-useless-constructor": "off",
      "prefer-destructuring": "off",
      "prefer-promise-reject-errors": "off",
      "require-await": "off",

      "@stylistic/js/block-spacing": "off",
      "@stylistic/js/brace-style": "off",
      "@stylistic/js/comma-dangle": "off",
      "@stylistic/js/comma-spacing": "off",
      "@stylistic/js/function-call-spacing": "off",
      "@stylistic/js/key-spacing": "off",
      "@stylistic/js/keyword-spacing": "off",
      "@stylistic/js/no-extra-parens": "off",
      "@stylistic/js/no-extra-semi": "off",
      "@stylistic/js/object-curly-spacing": "off",
      "@stylistic/js/quotes": "off",
      "@stylistic/js/semi": "off",
      "@stylistic/js/space-before-blocks": "off",
      "@stylistic/js/space-before-function-paren": "off",
      "@stylistic/js/space-infix-ops": "off",

      "@stylistic/ts/block-spacing": "error",
      "@stylistic/ts/brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "@stylistic/ts/comma-dangle": ["error", "never"],
      "@stylistic/ts/comma-spacing": ["error", { after: true, before: false }],
      "@stylistic/ts/function-call-spacing": ["error", "never"],
      "@stylistic/ts/indent": "off",
      "@stylistic/ts/key-spacing": "error",
      "@stylistic/ts/keyword-spacing": "error",
      "@stylistic/ts/lines-around-comment": "off",
      "@stylistic/ts/lines-between-class-members": "off",
      "@stylistic/ts/member-delimiter-style": ["error", {
        multiline: { delimiter: "none" },
        singleline: { delimiter: "comma" }
      }],
      "@stylistic/ts/no-extra-parens": ["error", "functions"],
      "@stylistic/ts/no-extra-semi": "error",
      "@stylistic/ts/object-curly-spacing": ["error", "always"],
      "@stylistic/ts/padding-line-between-statements": "off",
      "@stylistic/ts/quotes": ["error", "double", { avoidEscape: true }],
      "@stylistic/ts/semi": ["error", "never"],
      "@stylistic/ts/space-before-blocks": "error",
      "@stylistic/ts/space-before-function-paren": ["error", {
        anonymous: "never",
        asyncArrow: "always",
        named: "never"
      }],
      "@stylistic/ts/space-infix-ops": "error",
      "@stylistic/ts/type-annotation-spacing": "error",

      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/array-type": ["error", { readonly: "generic" }],
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/ban-ts-comment": ["error", {
        "minimumDescriptionLength": 10,
        "ts-check": false,
        "ts-expect-error": "allow-with-description",
        "ts-ignore": true,
        "ts-nocheck": true
      }],
      "@typescript-eslint/ban-tslint-comment": "off",
      "@typescript-eslint/ban-types": "error",
      "@typescript-eslint/class-literal-property-style": "error",
      "@typescript-eslint/class-methods-use-this": "off",
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/consistent-generic-constructors": "error",
      "@typescript-eslint/consistent-indexed-object-style": "error",
      "@typescript-eslint/consistent-return": "off",
      "@typescript-eslint/consistent-type-assertions": ["error", {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "never"
      }],
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/dot-notation": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-member-accessibility": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/init-declarations": "off",
      "@typescript-eslint/max-params": "off",
      "@typescript-eslint/member-ordering": "error",
      "@typescript-eslint/method-signature-style": ["error", "method"],
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-array-constructor": "off",
      "@typescript-eslint/no-array-delete": "error",
      "@typescript-eslint/no-base-to-string": "error",
      "@typescript-eslint/no-confusing-non-null-assertion": "error",
      "@typescript-eslint/no-confusing-void-expression": "error",
      "@typescript-eslint/no-dupe-class-members": "off",
      "@typescript-eslint/no-duplicate-enum-values": "error",
      "@typescript-eslint/no-duplicate-type-constituents": "error",
      "@typescript-eslint/no-dynamic-delete": "error",
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-extra-non-null-assertion": "error",
      "@typescript-eslint/no-extraneous-class": "error",
      "@typescript-eslint/no-floating-promises": ["error", {
        allowForKnownSafePromises: [],
        ignoreIIFE: false,
        ignoreVoid: true
      }],
      "@typescript-eslint/no-for-in-array": "error",
      "@typescript-eslint/no-implied-eval": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/no-invalid-this": "off",
      "@typescript-eslint/no-invalid-void-type": "error",
      "@typescript-eslint/no-loop-func": "error",
      "@typescript-eslint/no-loss-of-precision": "error",
      "@typescript-eslint/no-magic-numbers": "off",
      "@typescript-eslint/no-meaningless-void-operator": "error",
      "@typescript-eslint/no-misused-new": "error",
      "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],
      "@typescript-eslint/no-mixed-enums": "error",
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-redeclare": "off",
      "@typescript-eslint/no-redundant-type-constituents": "error",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-restricted-imports": "off",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-this-alias": "error",
      "@typescript-eslint/no-throw-literal": "error",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",
      "@typescript-eslint/no-unnecessary-template-expression": "error",
      "@typescript-eslint/no-unnecessary-type-arguments": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-unnecessary-type-constraint": "error",
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-declaration-merging": "error",
      "@typescript-eslint/no-unsafe-enum-comparison": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-unsafe-unary-minus": "error",
      "@typescript-eslint/no-unused-expressions": "error",
      "@typescript-eslint/no-unused-vars": ["error", {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^$",
        destructuredArrayIgnorePattern: "^$",
        ignoreRestSiblings: true,
        vars: "all",
        varsIgnorePattern: "^$"
      }],
      "@typescript-eslint/no-use-before-define": ["error", { variables: false }],
      "@typescript-eslint/no-useless-constructor": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/non-nullable-type-assertion-style": "error",
      "@typescript-eslint/parameter-properties": ["error", {
        allow: [
          "private",
          "private readonly",
          "protected",
          "protected readonly",
          "public",
          "public readonly",
          "readonly"
        ]
      }],
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/prefer-destructuring": ["error", {
        object: true
      }, {
        enforceForDeclarationWithTypeAnnotation: true
      }],
      "@typescript-eslint/prefer-enum-initializers": "error",
      "@typescript-eslint/prefer-find": "error",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-function-type": "error",
      "@typescript-eslint/prefer-includes": "error",
      "@typescript-eslint/prefer-literal-enum-member": "error",
      "@typescript-eslint/prefer-namespace-keyword": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": ["error", {
        allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: false,
        checkAny: true,
        checkBigInt: true,
        checkBoolean: true,
        checkNumber: true,
        checkString: true,
        checkUnknown: true,
        requireNullish: false
      }],
      "@typescript-eslint/prefer-promise-reject-errors": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/prefer-readonly-parameter-types": "off",
      "@typescript-eslint/prefer-reduce-type-parameter": "error",
      "@typescript-eslint/prefer-regexp-exec": "off",
      "@typescript-eslint/prefer-return-this-type": "error",
      "@typescript-eslint/prefer-string-starts-ends-with": "error",
      "@typescript-eslint/promise-function-async": ["error", { checkArrowFunctions: false }],
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/require-await": "error",
      "@typescript-eslint/restrict-plus-operands": "error",
      "@typescript-eslint/restrict-template-expressions": "error",
      "@typescript-eslint/return-await": "off",
      "@typescript-eslint/sort-type-constituents": ["error", {
        caseSensitive: true,
        checkIntersections: true,
        checkUnions: true,
        groupOrder: [
          "named",
          "keyword",
          "operator",
          "literal",
          "function",
          "import",
          "conditional",
          "object",
          "tuple",
          "intersection",
          "union",
          "nullish"
        ]
      }],
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/triple-slash-reference": "error",
      "@typescript-eslint/typedef": "off",
      "@typescript-eslint/unbound-method": "error",
      "@typescript-eslint/unified-signatures": "error",
      "@typescript-eslint/use-unknown-in-catch-callback-variable": "error"
    }
  },
  {
    files: ["**/*.d.ts"],
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off"
    }
  }
)
