import process from 'process';

process.addListener('exit', (exitCode) => {
  console.info(`Node.js exit with code ${exitCode}`);
});

console.info(process.version);
console.table(process.argv); // contoh: node 12-Process.mjs "argument ke-3"
console.table(process.report);
// console.table(process.env);