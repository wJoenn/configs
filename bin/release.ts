import type { Config } from "../types"
import fs from "fs"
import path from "path"
import { execSync } from "child_process"
import { configs, type ConfigName } from "../configs/index.ts"

const EMPTY_CONFIG: Config = {
  env: {},
  ignorePatterns: [],
  parser: undefined,
  parserOptions: {},
  plugins: [],
  rules: {}
}

const TEMP_FILES = ["typescript.json"]

const createConfigs = (names: ConfigName[]) => {
  names.forEach(name => {
    const fullConfig = configs[name]
    const eslintrc: Config = { ...EMPTY_CONFIG }

    const extendedConfig = fullConfig.extends?.concat(fullConfig) ?? [fullConfig]

    extendedConfig.forEach(config => {
      if (config.env) {
        Object.entries(config.env).forEach(([key, value]) => { eslintrc.env![key] = value })
      }

      if (config.ignorePatterns) {
        eslintrc.ignorePatterns!.push(...config.ignorePatterns)
      }

      eslintrc.parser = config.parser

      Object.entries(config.parserOptions).forEach(([key, value]) => { eslintrc.parserOptions[key] = value })

      eslintrc.plugins.push(...config.plugins)

      Object.entries(config.rules).forEach(([key, value]) => { eslintrc.rules[key] = value })
    })

    fs.writeFileSync(path.resolve(__dirname, `../${name}.json`), JSON.stringify(eslintrc, null, 2))
  })
}

const cleanUp = () => {
  TEMP_FILES.forEach(file => {
    fs.unlinkSync(path.resolve(__dirname, `../${file}`))
  })
}

try {
  createConfigs(["typescript"])
  execSync("npm publish --access public")
} finally {
  cleanUp()
}
