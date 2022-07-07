/*
  Perintah Debugger

  saat masuk ke mode debug, ada beberapa perintah yang bisa kita gunakan dalam melakukan debugging

  - cont, c : continue
  - next, n : next
  - step, s : step in
  - out,  o : step out
  - pause   : pause running code
  - watch   : untuk melihat isi pada variable
 */

/**
  cara menjalankan code dalam mode debug, tambahkan kata kunci "inspect"

  contoh: node inspect nama_file.js
 */

/*
  gunakan perintah "watch" untuk melihat isi dari sebuah variable

  contoh: watch("name")
 */

function sayHello(name) {
  debugger;
  return `Hello ${name}`;
}

const hello = sayHello('ilham');

debugger;
console.info(hello);