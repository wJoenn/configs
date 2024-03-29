import type { Linter, ESLint } from "eslint"

import vue from "eslint-plugin-vue"
import tseslint from "typescript-eslint"
import vueParser from "vue-eslint-parser"
import typescript from "./typescript.js"

const config: Linter.FlatConfig[] = [
  ...typescript as Linter.FlatConfig[],
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
    processor: "vue/vue"
  }
]

export default config
