import net from 'net';

const client = net.createConnection({
  port: 3000, // port server
  host: 'localhost' // host server
});

setInterval(() => {
  client.write('ilham\r\n');
  // "\n" : tambahkan Enter untuk menandakan data siap dikirim. Jika tidak, data tidak akan dikirim.
}, 2000);

client.on('data', (data) => {
  console.info(`Reveive data from server: ${data.toString()}`);
});