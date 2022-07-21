/**
 * -- Cluster --
 * - Seperti yang dijelaskan di awal bahwa Node.js itu secara default berjalan di single thread,
 *   kecuali jika kita membuat thread manual menggunakan worker thread, tapi tetap dalam satu proses.
 * - Node.js memiliki standard library bernama Cluster, dimana kita bisa menjalankan beberapa proses Node.js sekaligus.
 * - Ini sangat cocok ketika kita menggunakan CPU yang multi core,
 *   sehingga semua core bisa kita utilisasi atau gunakan dengan baik saat kita jalankan proses Node.js di CPU multi core.
 */

/**
 * -- Cluster dan Primary --
 * - Di dalam Cluster, terdapat 2 jenis aplikasi yaitu Primary dan Worker
 * - Primary biasanya digunakan sebagai koordinator atau manajer untuk para Worker.
 * - Sedangkan Worker sendiri adalah aplikasi yang menjalankan tugas.
 */

import cluster from 'cluster';
import http from 'http';
import os from 'os';
import process from 'process';

if (cluster.isPrimary) {
  console.info(`Primary ${process.pid}`);
  for (let i = 1; i <= os.cpus().length; i++) {
    // jalankan worker sesuai jumlah CPU
    cluster.fork();
    console.info(`cpu ${i}`);
  }

  cluster.addListener('exit', (worker) => {
    console.info(`Worker ${worker.id} is exited`);
    
    // ketika ada worker yg mati, jalankan worker lagi
    cluster.fork();
  });
}

if (cluster.isWorker) {
  // dijalankan sesuai jumlah cluster.fork()
  console.info(`Worker ${process.pid}`);

  const server = http.createServer((req, res) => {
    res.write(`Response from process ${process.pid}`);
    res.end();

    // exit worker
    process.exit();
  });

  server.listen(3000, () => console.info(`running on http://localhost:3000`));
}