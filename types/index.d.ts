type RuleOption = Record<string, unknown> | number | string
type Rules = Record<string, Severity | [Severity, RuleOption, RuleOption] | [Severity, RuleOption]>
type Severity = "error" | "off" | "warn"

export type Config = {
  env?: Record<string, boolean>
  extends?: Config[]
  ignorePatterns?: string[]
  overrides?: { files: string[], rules: Rules }[]
  parser?: string
  parserOptions: Record<string, unknown>
  plugins: string[]
  rules: Rules
}
