/**
 * -- HTTP Client --
 * Node.js juga memiliki memiliki standard library untuk HTTP
 * Salah satu fitur di module HTTP adalah HTTP Client, dimana kita bisa melakukan simulasi HTTP Request menggunakan Node.js.
 * Terdapat 2 jenis module HTTP di Node.js, HTTP dan HTTPS.
 */

import https from 'https';

const url = 'https://eoi0n4jxdrz62rw.m.pipedream.net'; // create hook on https://pipedream.com/

const request = https.request(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}, (response) => {
  response.addListener('data', (data) => {
    console.info(`Receive : ${data.toString()}`);
  });
});

const body = JSON.stringify({
  firstName: 'Moh. Ilham',
  lastName: 'Burhanuddin'
});

request.write(body);
request.end();