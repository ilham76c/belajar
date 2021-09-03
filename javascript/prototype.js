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
  constructor(nama, ukt, jurusan) {
    this.nama = nama;
    this.ukt = ukt;
    this.jurusan = jurusan;
  }

  tambahUkt(jumlah) {
    this.ukt += jumlah;
    return `Total UKT: ${this.ukt}`;
  }

  info() {
    console.log(`
      Nama: ${this.nama}
      Jurusan: ${this.jurusan}
      UKT: ${this.ukt}
    `);
  }
}

const mhs2 = new Mahasiswa2('ilham', 10000, 'Teknik Informatika');
mhs2.tambahUkt(2500000);
mhs2.info();
