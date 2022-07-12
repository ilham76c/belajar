/**
 * -- Buffer --
 * Buffer merupakan object yang berisikan urutan byte dengan panjang tetap.
 * Buffer merupakan turunan dari tipe data Uint8Array.
 */

/**
 * -- Buffer Encoding --
 * Buffer juga bisa digunakan untuk melakukan encoding dari satu encoding ke encoding yang lain.
 * Ada banyak encoding yang didukung oleh Buffer, misal utf8, ascii, base64, base64url dan lain-lain.
 */

const buffer = Buffer.from('Indonesia', 'utf8');

console.info(buffer);
console.info(buffer.toString());
console.info(buffer.toString('hex'));
console.info(buffer.toString('base64'));

buffer.reverse();
console.info(buffer.toString());

const bufferHex = Buffer.from('496e646f6e65736961', 'hex');
console.info(bufferHex.toString('utf8'));