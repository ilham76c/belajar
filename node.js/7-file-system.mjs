import fs from 'fs/promises';

const buffer = await fs.readFile('6-path.mjs');

console.info(buffer.toString());

await fs.writeFile('tes-file-system.txt', 'generate dari 7-file-system.mjs');