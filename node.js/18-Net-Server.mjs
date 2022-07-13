/**
 * -- Net --
 * Net merupakan standard library yang bisa digunakan untuk membuat network client dan server berbais TCP.
 * Net Server dan Client merupakan object Stream, sehingga kita bisa baca datanya, tulis datanya dan juga menambahkan listener.
 */

import net from 'net';

const server = net.createServer((client) => {
  console.info('Client connected');;

  client.on('data', (data) => {
    console.info(`Receive data from client : ${data.toString()}`);
    client.write(`Hello ${data.toString()}\r\n`);
    // "\n" : tambahkan Enter untuk menandakan data siap dikirim.
  });
});

server.listen(3000, 'localhost');