import type { ConfigName } from "../configs/index.ts"
import fs from "fs"
import { execSync } from "child_process"
import { createConfig } from "../utils/index.ts"

const TEMP_FILES: string[] = []

const createConfigs = (names: ConfigName[]) => {
  names.forEach(name => {
    const file = createConfig(name)
    TEMP_FILES.push(file)
  })
}

const cleanUp = () => {
  TEMP_FILES.forEach(file => {
    fs.unlinkSync(file)
  })
}

try {
  createConfigs(["typescript"])
  execSync("npm publish --access public")
} finally {
  cleanUp()
}
