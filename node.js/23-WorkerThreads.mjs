/**
 * -- Worker Threads --
 * Worker Threads adalah standard library yang bisa kita gunakan untuk menggunakan thread secara paralel ketika mengeksekusi JavaScript.
 * Worker Threahs dangat cocok ketika kita membuat kode program yang butuh dijalankan secara paralel,
 * kasusnya adalah ketika kode program kita membutuhkan proses yang CPU intensive,
 * seperti enkripsi atau kompresi.
 * Cara kerja Worker Threads mirip dengan Web Worker di JavaScript Web API.
 */

import { threadId, parentPort } from 'worker_threads';

parentPort.addListener('message', (message) => {
  for (let i = 0; i < message; i++) {
    console.info(`thread-${threadId} send message ${i}`);
    parentPort.postMessage(i);
  }
  parentPort.close();
});