/**
 * -- Stream --
 * Stream adalah standard library untuk kontrak di Node.js.
 * Ada banyak sekali stream object di Node.js.
 * Stream bisa jadi object yang bisa dibaca, atau bisa ditulis, dan stream adalah turunan dari EventEmitter.
 */

import fs from 'fs';

const writer = fs.createWriteStream('target.log');

writer.write('Ilham\n');
writer.write('from\n');
writer.write('Indonesia\n');

writer.end();

const reader = fs.createReadStream('target.log');

reader.on('data', (data) => {
  // type dari "data" adalah Buffer
  console.info(data.toString());
});