import type { Linter, ESLint } from "eslint"

import vue from "eslint-plugin-vue"
import tseslint from "typescript-eslint"
import vueParser from "vue-eslint-parser"
import typescript from "./typescript.js"

const config: Linter.FlatConfig[] = [
  ...typescript as Linter.FlatConfig[],
  {
    ignores: [
      ".vue/**/*"
    ]
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser
      }
    },
    plugins: {
      vue: vue as ESLint.Plugin
    },
    processor: "vue/vue",
    rules: {
      "vue/array-bracket-newline": ["error", "consistent"],
      "vue/array-bracket-spacing": ["error", "never"],
      "vue/array-element-newline": ["error", "consistent"],
      "vue/arrow-spacing": "error",
      "vue/attribute-hyphenation": "error",
      "vue/attributes-order": ["error", { alphabetical: true }],
      "vue/block-lang": ["error", { script: { lang: "ts" } }], // TODO remove for js
      "vue/block-order": ["error", { order: ["template", "script[setup]", "script:not([setup])", "style"] }],
      "vue/block-spacing": "error",
      "vue/block-tag-newline": "error",
      "vue/brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "vue/camelcase": "off",
      "vue/comma-dangle": ["error", "never"],
      "vue/comma-spacing": "error",
      "vue/comma-style": "error",
      "vue/comment-directive": ["error", { reportUnusedDisableDirectives: true }],
      "vue/component-api-style": ["error", ["script-setup"]],
      "vue/component-definition-name-casing": "error",
      "vue/component-name-in-template-casing": ["error", "PascalCase", {
        globals: [
          "KeepAlive",
          "RouterLink",
          "RouterView",
          "Suspense",
          "Teleport",
          "Transition",
          "TransitionGroup"
        ],
        registeredComponentsOnly: false
      }],
      "vue/component-options-name-casing": "error",
      "vue/custom-event-name-casing": "error",
      "vue/define-emits-declaration": "error",
      "vue/define-macros-order": ["error", {
        defineExposeLast: false,
        order: ["defineEmits", "defineProps"]
      }],
      "vue/define-props-declaration": "error",
      "vue/dot-location": ["error", "property"],
      "vue/dot-notation": "error",
      "vue/enforce-style-attribute": "off",
      "vue/eqeqeq": ["error", "always", { null: "never" }],
      "vue/first-attribute-linebreak": "error",
      "vue/func-call-spacing": "error",
      "vue/html-button-has-type": "off",
      "vue/html-closing-bracket-newline": "error",
      "vue/html-closing-bracket-spacing": "error",
      "vue/html-comment-content-newline": "off",
      "vue/html-comment-content-spacing": "off",
      "vue/html-comment-indent": "off",
      "vue/html-end-tags": "error",
      "vue/html-indent": "error",
      "vue/html-quotes": "error",
      "vue/html-self-closing": "error",
      "vue/key-spacing": "error",
      "vue/keyword-spacing": "error",
      "vue/match-component-file-name": ["error", {
        extensions: ["vue"],
        shouldMatchCase: true
      }],
      "vue/match-component-import-name": "error",
      "vue/max-attributes-per-line": ["error", { singleline: 999 }],
      "vue/max-len": ["error", {
        code: 120,
        ignoreComments: true,
        ignorePattern: "^ +:?\\w+=\".+\"(?: \\/?>)?$",
        ignoreUrls: true
      }],
      "vue/max-lines-per-block": "off",
      "vue/multi-word-component-names": "off",
      "vue/multiline-html-element-content-newline": "error",
      "vue/multiline-ternary": ["error", "never"],
      "vue/mustache-interpolation-spacing": "error",
      "vue/new-line-between-multi-line-property": "off",
      "vue/next-tick-style": "error",
      "vue/no-arrow-functions-in-watch": "error",
      "vue/no-async-in-computed-properties": "error",
      "vue/no-bare-strings-in-template": "off",
      "vue/no-boolean-default": "off",
      "vue/no-child-content": "error",
      "vue/no-computed-properties-in-data": "error",
      "vue/no-console": "error",
      "vue/no-constant-condition": "error",
      "vue/no-deprecated-data-object-declaration": "error",
      "vue/no-deprecated-destroyed-lifecycle": "error",
      "vue/no-deprecated-dollar-listeners-api": "error",
      "vue/no-deprecated-dollar-scopedslots-api": "error",
      "vue/no-deprecated-events-api": "error",
      "vue/no-deprecated-filter": "error",
      "vue/no-deprecated-functional-template": "error",
      "vue/no-deprecated-html-element-is": "error",
      "vue/no-deprecated-inline-template": "error",
      "vue/no-deprecated-model-definition": "error",
      "vue/no-deprecated-props-default-this": "error",
      "vue/no-deprecated-router-link-tag-prop": ["error", { components: ["NuxtLink", "RouterLink"] }],
      "vue/no-deprecated-scope-attribute": "error",
      "vue/no-deprecated-slot-attribute": "error",
      "vue/no-deprecated-slot-scope-attribute": "error",
      "vue/no-deprecated-v-bind-sync": "error",
      "vue/no-deprecated-v-is": "error",
      "vue/no-deprecated-v-on-native-modifier": "error",
      "vue/no-deprecated-v-on-number-modifiers": "error",
      "vue/no-deprecated-vue-config-keycodes": "error",
      "vue/no-dupe-keys": "error",
      "vue/no-dupe-v-else-if": "error",
      "vue/no-duplicate-attr-inheritance": "error",
      "vue/no-duplicate-attributes": "error",
      "vue/no-empty-component-block": "error",
      "vue/no-empty-pattern": "error",
      "vue/no-export-in-script-setup": "error",
      "vue/no-expose-after-await": "error",
      "vue/no-extra-parens": "error",
      "vue/no-irregular-whitespace": "error",
      "vue/no-lifecycle-after-await": "error",
      "vue/no-lone-template": "error",
      "vue/no-loss-of-precision": "error",
      "vue/no-multi-spaces": "error",
      "vue/no-multiple-objects-in-class": "error",
      "vue/no-multiple-slot-args": "error",
      "vue/no-mutating-props": "error",
      "vue/no-parsing-error": "error",
      "vue/no-potential-component-option-typo": "error",
      "vue/no-ref-as-operand": "error",
      "vue/no-ref-object-reactivity-loss": "error",
      "vue/no-required-prop-with-default": "error",
      "vue/no-reserved-component-names": ["error", {
        disallowVue3BuiltInComponents: true,
        disallowVueBuiltInComponents: true
      }],
      "vue/no-reserved-keys": "error",
      "vue/no-reserved-props": "error",
      "vue/no-restricted-block": "off",
      "vue/no-restricted-call-after-await": "off",
      "vue/no-restricted-class": "off",
      "vue/no-restricted-component-names": "off",
      "vue/no-restricted-component-options": "off",
      "vue/no-restricted-custom-event": "off",
      "vue/no-restricted-html-elements": "off",
      "vue/no-restricted-props": "off",
      "vue/no-restricted-static-attribute": "off",
      "vue/no-restricted-syntax": "off",
      "vue/no-restricted-v-bind": "off",
      "vue/no-restricted-v-on": "off",
      "vue/no-root-v-if": "error",
      "vue/no-setup-props-reactivity-loss": "error",
      "vue/no-shared-component-data": "error",
      "vue/no-side-effects-in-computed-properties": "error",
      "vue/no-spaces-around-equal-signs-in-attribute": "error",
      "vue/no-sparse-arrays": "error",
      "vue/no-static-inline-styles": "off",
      "vue/no-template-key": "error",
      "vue/no-template-shadow": "error",
      "vue/no-template-target-blank": "off",
      "vue/no-textarea-mustache": "error",
      "vue/no-this-in-before-route-enter": "error",
      "vue/no-undef-components": "off",
      "vue/no-undef-properties": "error",
      "vue/no-unsupported-features": "off",
      "vue/no-unused-components": "error",
      "vue/no-unused-emit-declarations": "error",
      "vue/no-unused-properties": ["error", {
        deepData: false,
        groups: ["props"],
        ignorePublicMembers: false,
        unreferencedOptions: []
      }],
      "vue/no-unused-refs": "error",
      "vue/no-unused-vars": "error",
      "vue/no-use-computed-property-like-method": "error",
      "vue/no-use-v-else-with-v-for": "error",
      "vue/no-use-v-if-with-v-for": "error",
      "vue/no-useless-concat": "error",
      "vue/no-useless-mustaches": "error",
      "vue/no-useless-template-attributes": "error",
      "vue/no-useless-v-bind": "error",
      "vue/no-v-for-template-key-on-child": "error",
      "vue/no-v-html": "error",
      "vue/no-v-text": "error",
      "vue/no-v-text-v-html-on-component": "error",
      "vue/no-watch-after-await": "error",
      "vue/object-curly-newline": "off",
      "vue/object-curly-spacing": ["error", "always"],
      "vue/object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
      "vue/object-shorthand": "error",
      "vue/one-component-per-file": "error",
      "vue/operator-linebreak": ["error", "before"],
      "vue/order-in-components": "error",
      "vue/padding-line-between-blocks": "error",
      "vue/padding-line-between-tags": "off",
      "vue/padding-lines-in-component-definition": ["error", { withinOption: "never" }],
      "vue/prefer-define-options": "error",
      "vue/prefer-import-from-vue": "error",
      "vue/prefer-prop-type-boolean-first": "off",
      "vue/prefer-separate-static-class": "error",
      "vue/prefer-template": "error",
      "vue/prefer-true-attribute-shorthand": "error",
      "vue/prop-name-casing": "error",
      "vue/quote-props": ["error", "consistent-as-needed"],
      "vue/require-component-is": "error",
      "vue/require-default-prop": "off",
      "vue/require-direct-export": ["error", { disallowFunctionalComponentFunction: true }],
      "vue/require-emit-validator": "error",
      "vue/require-explicit-emits": "error",
      "vue/require-explicit-slots": "error",
      "vue/require-expose": "off",
      "vue/require-macro-variable-name": "error",
      "vue/require-name-property": "error",
      "vue/require-prop-comment": "off",
      "vue/require-prop-type-constructor": "error",
      "vue/require-prop-types": "error",
      "vue/require-render-return": "error",
      "vue/require-slots-as-functions": "error",
      "vue/require-toggle-inside-transition": "error",
      "vue/require-typed-object-prop": "error",
      "vue/require-typed-ref": "error",
      "vue/require-v-for-key": "error",
      "vue/require-valid-default-prop": "error",
      "vue/return-in-computed-property": "error",
      "vue/return-in-emits-validator": "error",
      "vue/script-indent": ["error", 2, { baseIndent: 1 }],
      "vue/singleline-html-element-content-newline": "off",
      "vue/sort-keys": "error",
      "vue/space-in-parens": "error",
      "vue/space-infix-ops": "error",
      "vue/space-unary-ops": "error",
      "vue/static-class-names-order": "error",
      "vue/template-curly-spacing": "error",
      "vue/this-in-template": "error",
      "vue/use-v-on-exact": "error",
      "vue/v-bind-style": ["error", "shorthand", { sameNameShorthand: "always" }],
      "vue/v-for-delimiter-style": "error",
      "vue/v-if-else-key": "off",
      "vue/v-on-event-hyphenation": "error",
      "vue/v-on-handler-style": "off",
      "vue/v-on-style": "error",
      "vue/v-slot-style": "error",
      "vue/valid-attribute-name": "error",
      "vue/valid-define-emits": "error",
      "vue/valid-define-options": "error",
      "vue/valid-define-props": "error",
      "vue/valid-next-tick": "error",
      "vue/valid-template-root": "error",
      "vue/valid-v-bind": "error",
      "vue/valid-v-cloak": "error",
      "vue/valid-v-else": "error",
      "vue/valid-v-else-if": "error",
      "vue/valid-v-for": "error",
      "vue/valid-v-html": "error",
      "vue/valid-v-if": "error",
      "vue/valid-v-is": "error",
      "vue/valid-v-memo": "error",
      "vue/valid-v-model": "error",
      "vue/valid-v-on": "error",
      "vue/valid-v-once": "error",
      "vue/valid-v-pre": "error",
      "vue/valid-v-show": "error",
      "vue/valid-v-slot": "error",
      "vue/valid-v-text": "error",

      "@stylistic/js/function-call-spacing": "off",
      "@stylistic/js/indent": "off",
      "@stylistic/js/max-len": "off",

      "@typescript-eslint/prefer-function-type": "off"
    }
  }
]

export default config
