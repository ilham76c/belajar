/**
 * HTTP Server
 * - Standard library HTTP tidak hanya bisa digunakan untuk HTTP Client,
 *   tapi juga bisa digunakan untuk membuat HTTP Server.
 * - Untuk kasus sederhana, cocok sekali jika ingin menggunakan HTTP Serever menggunakan standard library Node.js,
 *   namun untuk kasus yang lebih kompleks, direkomendasikan menggunakan library atau framework yang lebih mudah penggunaannya.
 */


import http from 'http';

const server = http.createServer((req, res) => {
  console.info(req.method);
  console.info(req.url);
  // console.info(req.headers);

  if (req.url === '/hello' && req.method === 'GET') {
    res.write('Hello from server');
  } else {
    res.write('Who are you?');
  }
  
  res.end();
});

server.listen(3000, () => console.log(`running on http://localhost:3000`))