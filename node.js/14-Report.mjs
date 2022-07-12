/**
 * Report merupakan feature yang terdapat di Node.js untuk membuat laporan secara otomatis dalam file,
 * ketika sesuatu terjadi pada aplikasi Node.js kita.
 */

import process from 'process';

process.report.reportOnFatalError = true;
process.report.reportOnUncaughtException = true;
process.report.reportOnSignal = true;
process.report.filename = 'report.json'; // nama file log error

function sampleError() {
  throw new Error('pesan error');
}

sampleError();