// -- Reusable Function --

// Array Map 
const result = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `Hai, ${name}!`});
console.log(result)
// Output: [ 'Hai, Harry!', 'Hai, Ron!', 'Hai, Jeff!', 'Hai, Thomas!' ]


// -- Array Filter --

/**
 * Contoh penggunaan ketika Anda ingin menghilangkan seluruh nilai falsy pada array
 */
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));
console.log(truthyArray);
//  Output: [ 1, 'Hallo', 'Harry', 14 ]


// -- Array Reduce --

/**
 * Array Reduce digunakan untuk mengeksekusi nilai pada setiap elemen
 * dan menampilkan dalam sebuah nilai saja
 */
const students = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 65,
  },
  {
    name: 'Ron',
    score: 75,
  },
  {
    name: 'Bethy',
    score: 80,
  }
];

const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore);
// Output: 280


// -- Array Some --

/**
 * Nilai yang dihasilkan didasarkan pada pernyataan apakah ada setidaknya satu 
 * dari deretan nilai dalam array tersebut lolos berdasarkan kriteria 
 * yang kita tuliskan dalam callback function.
 */

const even = [1, 2, 3, 4, 5].some(element => element % 2 === 0); 
console.log(even);
//  Output: true


// -- Array Find --

/**
 * Array Find akan menghasilkan satu nilai dari elemen yang pertama kali ditemukan
 * berdasarkan kriteria tertentu dan akan menghasilkan nilai undefined
 * bila tidak ada kriteria yang terpenuhi pada item array
 */
 const inventory = [
  {
    name: 'apples', 
    quantity: 2
  },
  {
    name: 'bananas', 
    quantity: 0
  },
  {
    name: 'cherries', 
    quantity: 5
  }
];

const findFruit = inventory.find(fruit => fruit.name === 'apples');
console.log(findFruit);
// Output: { name: 'apples', quantity: 2 }


// -- Array Sort --

/**
 * array.sort() merupakan fungsi bawaan dari array 
 * yang berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai. 
 * Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string 
 * dan mengurutkannya secara ascending
 */
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);
// Output: [ 1, 1000, 101, 121, 30, 4 ]

/**
 * Contoh pengurutan di atas didasarkan pada pengurutan bentuk tipe data string. 
 * Oleh karena itu, ketika kita ingin mengurutkan sesuai dengan kriteria yang kita inginkan 
 * (berdasarkan tanggal ataupun berdasarkan nilai siswa) maka kita perlu membuat compare function tersendiri.
 */
const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);
//  Output: [ 1, 4, 30, 101, 121, 1000 ]


// -- Array Every --

/**
 * array.every() merupakan fungsi bawaan dari array 
 * yang digunakan untuk mengecheck apakah semua nilai dari sebuah array 
 * sesuai dengan kriteria yang didefinisikan.
 */
const scores = [70,85,90,50];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);
// Output: false


// -- Array Foreach --

/**
 * Array forEach merupakan fungsi bawaan dari array 
 * yang berfungsi untuk memanggil fungsi callback pada setiap iterasi index array. 
 * Berbeda dari fungsi array lain, fungsi ini tidak mengembalikan nilai apa pun. 
 * Jadi fungsi hanya berfungsi untuk memanggil fungsi callback-nya saja.
 */
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
for(let i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}!`);
}
/**
 * Output:  Hello, Harry!
 *          Hello, Ron!
 *          Hello, Jeff!
 *          Hello, Thomas!
 */

for(let i = 0; i < names.length; i++) {
  if(names[i] === 'Jeff') continue; // Bisa!
  
  console.log(`Hello, ${names[i]}!`);
}

// Code akan error karena tidak bisa menggunakan syntax continue
names.forEach((name) => {
  if(name === 'Jeff') continue; // Tidak Bisa!
  console.log(`Hello, ${name}`);
});