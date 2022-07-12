/**
 * -- Timer --
 * Merupakan standard library untuk melakukan scheduling.
 * Function di Timer terdapat di globals atau built-in function,
 * sehingga kita bisa menggunakannya tanpa melakukan import,
 * namun semua function Timer menggunakan Callback.
 * Jika kita ingin menggunakan Timer versi Promise, kita bisa meng-import dari module "timer/promise"
 */

import timers from 'timers/promises';

// versi callback
// setInterval(() => {
//   console.info(`Start time at ${new Date()}`);
// }, 1000);

// versi promise
console.info(`Sebelum: ${new Date}`);
await timers.setTimeout(2000); // delay selama 2 detik
console.info(`Setelah: ${new Date}`);

for await (const startTime of timers.setInterval(1000, new Date())) {
  // karena new Date() sekali dibuat maka value-nya akan sama saja
  console.info(`Start time at ${startTime}`);
}