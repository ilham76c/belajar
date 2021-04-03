const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];


// filter
const filterAngka = angka.filter(function(value) {
  return value >= 3;
})

console.log(filterAngka);


// map
const mapAngka = angka.map(function(value) {
  return value * 2;
})

console.log(mapAngka);


// reduce
/**
 * [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]
 * jumlahkan seluruh element pada array
 * accumulator --> adalah hasil dari proses tiap looping
 * currentValue --> adalah element array yang sedang di looping 
 * 
 * 100 pada parameter kedua merupakan currentValue.
 * jika tidak dituliskan maka nilai awalnya adalah 0
 * */ 

// contoh 1
const reduceAngka1 = angka.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});

console.log(reduceAngka1);

// contoh 2
const reduceAngka2 = angka.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 100);

console.log(reduceAngka2);



// Method Chaining
/**
 * seluruh proses diatas dapat disingkat menggunakan method chaining seperti di bawah ini.
 */

const hasil = angka.filter(val => val > 5)
                  .map(val => val * 3)
                  .reduce((acc, cur) => acc + cur);

console.log(hasil);