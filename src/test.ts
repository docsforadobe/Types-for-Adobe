import * as child_process from "child_process"
import { IOptions, sync as glob } from "glob"
import { promisify } from "util"
const execFile = promisify(child_process.execFile)

main()

async function main() {
  try {
    const options: IOptions = { ignore: "node_modules/**" }
    const files = glob("*/**/tsconfig.json", options)

    for (const file of files) {
      const dir = file.replace("/tsconfig.json", "")
      await execFile("tsc", ["-p", ".", "--pretty", "--noEmit"], { cwd: dir })
      console.log("OK " + dir)
    }

    console.log("Tests passed.")
    process.exit(0)
  } catch (e) {
    console.log(e.stdout)
    process.exit(1)
  }
}
