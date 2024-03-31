import type { Linter, ESLint } from "eslint"

import importPlugin from "eslint-plugin-import"
import promise from "eslint-plugin-promise"
import stylysticJS from "@stylistic/eslint-plugin-js"
import globals from "globals"

const { browser, jest, node } = globals

const config: Linter.FlatConfig = {
  ignores: [
    "dist/**/*",
    "node_modules/**/*"
  ],
  languageOptions: {
    globals: {
      ...browser,
      ...jest,
      ...node
    },
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    }
  },
  plugins: {
    "@stylistic/js": stylysticJS,
    "import": importPlugin as ESLint.Plugin,
    "promise": promise as ESLint.Plugin
  },
  rules: {
    "array-callback-return": "error",
    "arrow-body-style": ["error", "as-needed"],
    "block-scoped-var": "error",
    "camelcase": "off",
    "capitalized-comments": "off",
    "class-methods-use-this": "off",
    "complexity": ["error", 5],
    "consistent-return": "off",
    "constructor-super": "error",
    "curly": "error",
    "default-case": "off",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": "error",
    "eqeqeq": ["error", "always", { null: "never" }],
    "for-direction": "error",
    "func-name-matching": "error",
    "func-names": ["error", "as-needed"],
    "func-style": ["error", "expression"],
    "getter-return": "off",
    "grouped-accessor-pairs": ["error", "getBeforeSet"],
    "guard-for-in": "error",
    "id-denylist": "off",
    "id-length": "off",
    "id-match": "off",
    "init-declarations": "off",
    "line-comment-position": "off",
    "logical-assignment-operators": "off",
    "max-classes-per-file": ["error", 1],
    "max-depth": ["error", 3],
    "max-lines": "off",
    "max-lines-per-function": "off",
    "max-nested-callbacks": ["error", 10],
    "max-params": "off",
    "max-statements": "off",
    "multiline-comment-style": "off",
    "new-cap": ["error", {
      capIsNew: false,
      newIsCap: true
    }],
    "no-alert": "error",
    "no-array-constructor": "off",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "off",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": ["error", "always"],
    "no-console": "error",
    "no-const-assign": "error",
    "no-constant-binary-expression": "error",
    "no-constant-condition": "error",
    "no-constructor-return": "error",
    "no-continue": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-div-regex": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-empty-character-class": "error",
    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-empty-static-block": "error",
    "no-eq-null": "off",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "off",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-import-assign": "error",
    "no-inline-comments": "off",
    "no-inner-declarations": ["error", "both"],
    "no-invalid-regexp": "error",
    "no-invalid-this": "error",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-loss-of-precision": "error",
    "no-magic-numbers": "off",
    "no-misleading-character-class": "error",
    "no-multi-assign": "error",
    "no-multi-str": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-native-nonconstructor": "error",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-obj-calls": "error",
    "no-object-constructor": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-plusplus": "off",
    "no-promise-executor-return": "error",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-restricted-exports": "off",
    "no-restricted-globals": "off",
    "no-restricted-imports": "off",
    "no-restricted-properties": "off",
    "no-restricted-syntax": "off",
    "no-return-assign": ["error", "always"],
    "no-return-await": "off",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-setter-return": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "off",
    "no-ternary": "off",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-undef": ["error", { typeof: true }],
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-underscore-dangle": "off",
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-unused-private-class-members": "error",
    "no-unused-vars": ["error", {
      argsIgnorePattern: "^_",
      ignoreRestSiblings: true
    }],
    "no-use-before-define": ["error", { variables: false }],
    "no-useless-backreference": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "off",
    "no-with": "error",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "operator-assignment": ["error", "always"],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": ["error", { object: true }],
    "prefer-exponentiation-operator": "error",
    "prefer-named-capture-group": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-has-own": "error",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "radix": "error",
    "require-atomic-updates": "off",
    "require-await": "error",
    "require-unicode-regexp": "off",
    "require-yield": "error",
    "sort-imports": "off",
    "sort-keys": ["error", "asc", {
      allowLineSeparatedGroups: true,
      natural: true
    }],
    "sort-vars": "error",
    "strict": "off",
    "symbol-description": "error",
    "unicode-bom": "off",
    "use-isnan": "error",
    "valid-typeof": "error",
    "vars-on-top": "error",
    "yoda": "error",

    "import/consistent-type-specifier-style": "off",
    "import/default": "error",
    "import/dynamic-import-chunkname": "off",
    "import/export": "error",
    "import/exports-last": "off",
    "import/extensions": ["error", "ignorePackages"],
    "import/first": "error",
    "import/group-exports": "off",
    "import/max-dependencies": "off",
    "import/named": "error",
    "import/namespace": "error",
    "import/newline-after-import": ["error", { considerComments: true }],
    "import/no-absolute-path": "error",
    "import/no-amd": "error",
    "import/no-anonymous-default-export": "off",
    "import/no-commonjs": "error",
    "import/no-cycle": "error",
    "import/no-default-export": "off",
    "import/no-deprecated": "error",
    "import/no-duplicates": "error",
    "import/no-dynamic-require": "error",
    "import/no-empty-named-blocks": "error",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/no-import-module-exports": "error",
    "import/no-internal-modules": "off",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-named-default": "error",
    "import/no-named-export": "off",
    "import/no-namespace": "off",
    "import/no-nodejs-modules": "off",
    "import/no-relative-packages": "error",
    "import/no-relative-parent-imports": "off",
    "import/no-restricted-paths": "off",
    "import/no-self-import": "error",
    "import/no-unassigned-import": "off",
    "import/no-unresolved": "off",
    "import/no-unused-modules": "error",
    "import/no-useless-path-segments": "error",
    "import/no-webpack-loader-syntax": "error",
    "import/order": ["error", { groups: ["type", "builtin", "external", "internal"] }],
    "import/prefer-default-export": "off",
    "import/unambiguous": "off",

    "promise/always-return": "error",
    "promise/avoid-new": "off",
    "promise/catch-or-return": "error",
    "promise/no-callback-in-promise": "off",
    "promise/no-multiple-resolved": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "error",
    "promise/no-new-statics": "error",
    "promise/no-promise-in-callback": "error",
    "promise/no-return-in-finally": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/prefer-await-to-callbacks": "error",
    "promise/prefer-await-to-then": "error",
    "promise/valid-params": "error",

    "@stylistic/js/array-bracket-newline": ["error", "consistent"],
    "@stylistic/js/array-bracket-spacing": ["error", "never"],
    "@stylistic/js/array-element-newline": ["error", "consistent"],
    "@stylistic/js/arrow-parens": ["error", "as-needed"],
    "@stylistic/js/arrow-spacing": "error",
    "@stylistic/js/block-spacing": "error",
    "@stylistic/js/brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "@stylistic/js/comma-dangle": ["error", "never"],
    "@stylistic/js/comma-spacing": "error",
    "@stylistic/js/comma-style": "error",
    "@stylistic/js/computed-property-spacing": ["error", "never"],
    "@stylistic/js/dot-location": ["error", "property"],
    "@stylistic/js/eol-last": ["error", "always"],
    "@stylistic/js/function-call-argument-newline": ["error", "consistent"],
    "@stylistic/js/function-call-spacing": "error",
    "@stylistic/js/function-paren-newline": ["error", "consistent"],
    "@stylistic/js/generator-star-spacing": ["error", "after"],
    "@stylistic/js/implicit-arrow-linebreak": ["error", "beside"],
    "@stylistic/js/indent": ["error", 2],
    "@stylistic/js/key-spacing": "error",
    "@stylistic/js/keyword-spacing": "error",
    "@stylistic/js/linebreak-style": ["error", "unix"],
    "@stylistic/js/lines-around-comment": "off",
    "@stylistic/js/lines-between-class-members": "off",
    "@stylistic/js/max-len": ["error", {
      code: 120,
      ignoreUrls: true
    }],
    "@stylistic/js/max-statements-per-line": "off",
    "@stylistic/js/multiline-ternary": ["error", "never"],
    "@stylistic/js/new-parens": ["error", "always"],
    "@stylistic/js/newline-per-chained-call": "off",
    "@stylistic/js/no-confusing-arrow": "error",
    "@stylistic/js/no-extra-parens": "error",
    "@stylistic/js/no-extra-semi": "error",
    "@stylistic/js/no-floating-decimal": "error",
    "@stylistic/js/no-mixed-operators": "error",
    "@stylistic/js/no-mixed-spaces-and-tabs": "error",
    "@stylistic/js/no-multi-spaces": "error",
    "@stylistic/js/no-multiple-empty-lines": ["error", { max: 1 }],
    "@stylistic/js/no-tabs": ["error", { allowIndentationTabs: true }],
    "@stylistic/js/no-trailing-spaces": "error",
    "@stylistic/js/no-whitespace-before-property": "error",
    "@stylistic/js/nonblock-statement-body-position": "off",
    "@stylistic/js/object-curly-newline": "off",
    "@stylistic/js/object-curly-spacing": ["error", "always"],
    "@stylistic/js/object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
    "@stylistic/js/one-var-declaration-per-line": "off",
    "@stylistic/js/operator-linebreak": ["error", "before"],
    "@stylistic/js/padded-blocks": ["error", "never"],
    "@stylistic/js/padding-line-between-statements": "off",
    "@stylistic/js/quote-props": ["error", "consistent-as-needed"],
    "@stylistic/js/quotes": ["error", "double"],
    "@stylistic/js/rest-spread-spacing": ["error", "never"],
    "@stylistic/js/semi": ["error", "never"],
    "@stylistic/js/semi-spacing": "error",
    "@stylistic/js/semi-style": ["error", "last"],
    "@stylistic/js/space-before-blocks": "error",
    "@stylistic/js/space-before-function-paren": ["error", {
      anonymous: "never",
      asyncArrow: "always",
      named: "never"
    }],
    "@stylistic/js/space-in-parens": "error",
    "@stylistic/js/space-infix-ops": "error",
    "@stylistic/js/space-unary-ops": "error",
    "@stylistic/js/spaced-comment": ["error", "always"],
    "@stylistic/js/switch-colon-spacing": "error",
    "@stylistic/js/template-curly-spacing": "error",
    "@stylistic/js/template-tag-spacing": ["error", "always"],
    "@stylistic/js/wrap-iife": ["error", "inside"],
    "@stylistic/js/wrap-regex": "off",
    "@stylistic/js/yield-star-spacing": ["error", "after"]
  },
  settings: {
    "import/parsers": {
      espree: [".js"]
    }
  }
}

export default config
