import type { Config } from "../types"
import fs from "fs"
import path from "path"
import { configs, type ConfigName } from "../configs/index.ts"

const EMPTY_CONFIG: Config = {
  env: {},
  ignorePatterns: [],
  parser: undefined,
  parserOptions: {},
  plugins: [],
  rules: {}
}

const buildEnv = (config: Config, eslintrc: Config) => {
  if (config.env) {
    const envs = Object.entries(config.env)
    envs.forEach(([env, enabled]) => { eslintrc.env![env] = enabled })
  }
}

const buildIgnorePatterns = (config: Config, eslintrc: Config) => {
  if (config.ignorePatterns) {
    eslintrc.ignorePatterns!.push(...config.ignorePatterns)
  }
}

const buildParser = (config: Config, eslintrc: Config) => { eslintrc.parser = config.parser }

const buildParserOptions = (config: Config, eslintrc: Config) => {
  const parserOptions = Object.entries(config.parserOptions)
  parserOptions.forEach(([option, value]) => { eslintrc.parserOptions[option] = value })
}

const buildPlugins = (config: Config, eslintrc: Config) => { eslintrc.plugins.push(...config.plugins) }

const buildRules = (config: Config, eslintrc: Config) => {
  const rules = Object.entries(config.rules)
  rules.forEach(([rule, value]) => { eslintrc.rules[rule] = value })
}

const configWithExtended = (config: Config): Config[] => [
  config.extends?.flatMap(extended => configWithExtended(extended)),
  config
].flat().filter((c): c is Config => !!c)

export const createConfig = (name: ConfigName, output?: string) => {
  const eslintrc = { ...EMPTY_CONFIG }
  const selectedConfig = configs[name]
  const extendedConfig = configWithExtended(selectedConfig)

  extendedConfig.forEach(config => {
    buildEnv(config, eslintrc)
    buildIgnorePatterns(config, eslintrc)
    buildParser(config, eslintrc)
    buildParserOptions(config, eslintrc)
    buildPlugins(config, eslintrc)
    buildRules(config, eslintrc)
  })

  const file = path.resolve(__dirname, `../${output ?? name}.json`)
  fs.writeFileSync(file, JSON.stringify(eslintrc, null, 2))

  return file
}
