import type { Linter } from "eslint"
import vue from "./vue.js"

const config: Linter.FlatConfig[] = [
  ...vue,
  {
    ignores: [
      ".nuxt/**/*",
      ".output/**/*"
    ]
  },
  {
    files: ["**/*.vue"],
    rules: {
      "vue/component-name-in-template-casing": ["error", "PascalCase", {
        globals: [
          "ClientOnly",
          "DevOnly",
          "KeepAlive",
          "NuxtErrorBoundary",
          "NuxtImg",
          "NuxtIsland",
          "NuxtLayout",
          "NuxtLink",
          "NuxtLoadingIndicator",
          "NuxtPage",
          "NuxtPicture",
          "NuxtWelcome",
          "Suspense",
          "Teleport",
          "Transition",
          "TransitionGroup"
        ],
        registeredComponentsOnly: false
      }]
    }
  }
]

export default config
