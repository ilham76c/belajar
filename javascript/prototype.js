// Prototype
function Mahasiswa(nama, ukt, jurusan) {
  this.nama = nama;
  this.ukt = ukt;
  this.jurusan = jurusan;

  return this;
}

Mahasiswa.prototype.tambahUkt = function (jumlah) {
  this.ukt += jumlah;
  return `Total UKT: ${this.ukt}`;
};

Mahasiswa.prototype.info = function () {
  console.log(`
    Nama: ${this.nama}
    Jurusan: ${this.jurusan}
    UKT: ${this.ukt}
  `);
};

const mhs = new Mahasiswa('ilham', 250000, 'Teknik Informatika');
mhs.tambahUkt(500000);
mhs.info();

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
