/**
 * -- Util --
 * Util adalah standard library yang berisikan utility-utility yang bisa kita gunakan untuk mempermudah pembuatan kode program di Node.js
 */

import util from 'util';

const nama = 'ilham';

console.info(`Nama: ${nama}`);
console.info(util.format('Nama: %s', nama));

const person = { firstName: 'ilham', lastName: 'burhanuddin' };

console.info(`Person ${JSON.stringify(person)}`);
console.info(util.format('Person: %j', person));