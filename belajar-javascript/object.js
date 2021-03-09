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
function Mahasiswa(nama, energy) {
  const mhs = {};
  mhs.nama = nama;
  mhs.energy = energy;

  mhs.makan = function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.nama}, selamat makan`);
  };

  mhs.main = function (jam) {
    this.energy -= jam;
    console.log(`Halo ${this.nama}, selamat bermain`);
  };

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
