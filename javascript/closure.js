/* eslint-disable wrap-iife */
/* eslint-disable no-plusplus */
// eslint-disable-next-line wrap-iife

// Contoh 1
const add = (function () {
  let counter = 0;
  return function () {
    /**
     * 'counter' merupakan closure karena mengakses/membutuhkan variable parent
     * yaitu variable 'counter' milik function add()
     */
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());

// Contoh 2
function ucapkanSalam(waktu) {
  return function (nama) {
    /**
     * 'waktu' merupakan closure karena mengakses argument/parameter parent
     * yaitu parameter 'waktu' milik function ucapkanSalam()
     */
    console.log(`Halo ${nama}, Selamat ${waktu}`);
  };
}

const selamatPagi = ucapkanSalam('pagi');
const selamatSiang = ucapkanSalam('siang');
const selamatMalam = ucapkanSalam('malam');

selamatPagi('ilham');
selamatSiang('ilham');
selamatMalam('jos');
