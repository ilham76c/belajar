/**
 * -- Zlib --
 * Zlib adalah standard library yang digunakan untuk melakukan kompresi menggunakan Gzip.
 */

import zlib from 'zlib';
import fs from 'fs';

const source = fs.readFileSync('21-Zlib-Compress.mjs'); // return berupa Buffer
// compress file menggunakan gzip
const result = zlib.gzipSync(source); // input atau source harus berupa Buffer

fs.writeFileSync('zlib.mjs.txt', result);