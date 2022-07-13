/**
 * -- Zlib --
 * Zlib adalah standard library yang digunakan untuk melakukan kompresi menggunakan Gzip.
 */

import zlib from 'zlib';
import fs from 'fs';

const source = fs.readFileSync('zlib.mjs.txt'); // return berupa Buffer

const result = zlib.unzipSync(source); // input atau source harus berupa Buffer

console.info(result.toString());