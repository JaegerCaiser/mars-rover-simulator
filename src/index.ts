import * as fs from 'fs';
import { createSimulator, explore } from './actions/exploration'
const filePath = process.argv[2]
if (!filePath) {
    console.error("include path file on the end command!")
    process.exit(0)
}

const fileContent = fs.readFileSync(filePath, 'utf-8');
const simulator = createSimulator(fileContent);
explore(simulator.rightUpper, simulator.rovers)