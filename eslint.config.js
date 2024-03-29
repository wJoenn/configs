import { typescript } from "./dist/index.js"

export default [
  ...typescript,
  {
    ignores: ["dist"]
  }
]
