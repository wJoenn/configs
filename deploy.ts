import fs from "fs"
import path from "path"
import { execSync } from "child_process"

const TEMP_FILES = [".eslintrc", "typescript.json"]

const writeConfigs = (names: ReadonlyArray<string>, compile = true) => {
  names.forEach(name => {
    const eslintrc = {
      extends: [`./configs/${name}.json`]
    }

    fs.writeFileSync(path.resolve(__dirname, ".eslintrc"), JSON.stringify(eslintrc, null, 2))

    if (compile) {
      execSync(`eslint --print-config .eslintrc > ${name}.json`)
    }
  })
}

const cleanUp = () => {
  TEMP_FILES.forEach(file => {
    fs.unlinkSync(path.resolve(__dirname, file))
  })

  writeConfigs(["typescript"], false)
}

try {
  writeConfigs(["typescript"])
  execSync("npm publish --access public")
} finally {
  cleanUp()
}
