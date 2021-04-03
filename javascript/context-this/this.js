// Contoh 1
const Mahasiswa1 = function() {
  this.nama = 'ilham';
  this.umur = 23;
  // function expression
  this.sayHello = function() {
    console.log(`Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun`)
  }
}

const mhs1 = new Mahasiswa1();
mhs1.sayHello();


// Contoh 2
const Mahasiswa2 = function() {
  this.nama = 'ilham';
  this.umur = 23;
  // arrow function
  this.sayHello = () => {
    console.log(`Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun`)
  }
}

const mhs2 = new Mahasiswa2();
mhs2.sayHello();


// Contoh 3
const Mahasiswa3 = {
  nama: 'ilham',
  umur: 23,
  // arrow function
  sayHello: function() {
    console.log(`Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun`)
  }
}

Mahasiswa3.sayHello();


// Contoh 4
const Mahasiswa4 = function() {
  this.nama = 'ilham';
  this.umur = 23;
  // arrow function
  this.sayHello = () => {
    console.log(`Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun`)
  };

  /**
   * karena setInterval() adalah function declaration maka akan di hoisting
   * sehingga jika tidak ada context "this.umur" pada function expression atau anonymous function
   * maka javascript akan mencari di global dan bukan di parent
   */
  // setInterval(function() {
  //   console.log(this.umur++);
  // }, 1000);

  /**
   * karena function expression atau anonymous function telah diganti dengan arrow function 
   * maka javascript akan mencari context "this.umur" pada parent atau parent-nya lagi hingga ditemukan
   * jika tidak ditemukan makan nilainya undefined
   */
  setInterval(() => {
    console.log(this.umur++);
  }, 1000);
}

const mhs4 = new Mahasiswa4();
mhs4.sayHello();