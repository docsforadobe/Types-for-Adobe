import * as child_process from "child_process";
import { IOptions, sync as glob } from "glob";
import { promisify } from "util";
const exec = promisify(child_process.exec);

main();

async function main() {
    try {
        await test();
        console.log("Test passed!");
        
    } catch (e) {
        console.error(e.cmd);
        console.error(e.stdout);
        process.exit(1);
    }
}

async function test() {
    const options: IOptions = { ignore: "node_modules/**" };
    const files = glob("*/**/tsconfig.json", options);

    const queue = files.map((file) => {
        const cwd = file.replace("tsconfig.json", "");
        return exec("cd " + cwd + "; tsc -p . --pretty");
    });
    
    await Promise.all(queue);
}
