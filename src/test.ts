import * as child_process from "child_process";
import { IOptions, sync as glob } from "glob";
import { promisify } from "util";
const exec = promisify(child_process.exec);

main();

async function main() {
    try {
        const tests = await test();
        
        console.log(tests.map(t => t.stdout).join(""));
        console.log("Tests passed.");
        process.exit(0);
        
    } catch (e) {
        console.error(e.cmd);
        console.error(e.stdout);
        console.log("Test failed.");
        process.exit(1);
    }
}

async function test() {
    const options: IOptions = { ignore: "node_modules/**" };
    const files = glob("*/**/tsconfig.json", options);

    const queue = files.map((file) => {
        const cwd = file.replace("/tsconfig.json", "");
        const ok = JSON.stringify("PASS " + cwd);
        return exec("cd " + cwd + "; tsc -p . --pretty && echo " + ok);
    });
    
    return await Promise.all(queue);
}
