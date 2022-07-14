/**
 * -- Worker Threads --
 * Worker Threads adalah standard library yang bisa kita gunakan untuk menggunakan thread secara paralel ketika mengeksekusi JavaScript.
 * Worker Threahs dangat cocok ketika kita membuat kode program yang butuh dijalankan secara paralel,
 * kasusnya adalah ketika kode program kita membutuhkan proses yang CPU intensive,
 * seperti enkripsi atau kompresi.
 * Cara kerja Worker Threads mirip dengan Web Worker di JavaScript Web API.
 */

import { threadId, Worker } from 'worker_threads';

const worker1 = new Worker('./23-WorkerThreads.mjs');
const worker2 = new Worker('./23-WorkerThreads.mjs');

worker1.addListener('message', (message) => {
  console.info(`thread-${threadId} receive message : ${message}`);
});

worker2.addListener('message', (message) => {
  console.info(`thread-${threadId} receive message : ${message}`);
});

worker1.postMessage(10);
worker2.postMessage(10);