/* eslint-disable object-shorthand */

// Tidak efektif untuk objek yang banyak
// 1. Object Literal
const mahasiswa = {
  nama: 'ilham',
  energy: 10,
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
};
mahasiswa.makan(2);
console.log(mahasiswa.energy);

// 2. Function Declaration
const methodMahasiswa = {
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.nama}, selamat makan`);
  },

  main: function (jam) {
    this.energy -= jam;
    console.log(`Halo ${this.nama}, selamat bermain`);
  },
};

function Mahasiswa(nama, energy) {
  const mhs = {};
  mhs.nama = nama;
  mhs.energy = energy;

  // method 'makan' dan 'minum' diletakkan di object baru agar tidak di buat ulang di memori
  // sehingga ketika kita membuat banyak objek, tidak banyak function yg dibuat pula
  // function 'makan' dan 'minum' tinggal reference ke 'methodMahasiswa' saja yg telah ada di memory
  mhs.makan = methodMahasiswa.makan;
  mhs.main = methodMahasiswa.main;

  return mhs;
}

const data = Mahasiswa('ilham', 12);
data.makan(4);
console.log(data.energy);
data.main(5);
console.log(data.energy);

// 3. Constructor Function
function Mahasiswa2(nama, energy) {
  this.nama = nama;
  this.energy = energy;

  this.makan = function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.nama}, selamat makan`);
  };

  this.main = function (jam) {
    this.energy -= jam;
    console.log(`Halo ${this.nama}, selamat bermain`);
  };
}

const data2 = new Mahasiswa2('jos', 5);
data2.makan(4);
console.log(data2.energy);
data2.main(5);
console.log(data2.energy);
