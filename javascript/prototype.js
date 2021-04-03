// Prototype
function Mahasiswa(nama, energy) {
  this.nama = nama;
  this.energy = energy;

  return this;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energy += porsi;
  return `Halo ${this.nama}, selamat makan!`;
};

Mahasiswa.prototype.main = function (jam) {
  this.energy -= jam;
  return `Halo ${this.nama}, selamat bermain!`;
};

Mahasiswa.prototype.tidur = function (jam) {
  this.energy += jam * 2;
  return `Halo ${this.nama}, selamat tidur!`;
};

const mhs = new Mahasiswa('ilham', 20);

console.log(mhs.makan(3));

// Class
class Mahasiswa2 {
  constructor(nama, energy) {
    this.nama = nama;
    this.energy = energy;
  }

  makan(porsi) {
    this.energy += porsi;
    return `Halo ${this.nama}, selamat makan!`;
  }

  main(jam) {
    this.energy -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
  }

  tidur(jam) {
    this.energy += jam * 2;
    return `Halo ${this.nama}, selamat tidur!`;
  }
}

const mhs2 = new Mahasiswa2('jos', 10);
console.log(mhs2.tidur(3));
