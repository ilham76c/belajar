// Array
const arr = ["Merah", "Kuning", "Hijau", "Biru"];

// For
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// ForEach
arr.forEach(value => console.log(value));

// ForEach dengan Index
arr.forEach((value, index) => console.log(`ke-${index}: ${value}`));


// For of Array
for (const iterator of arr) {
    console.log(iterator);
}

// For of Array dengan Index
for (const [index, iterator] of arr.entries()) {
    console.log(`ke-${index}: ${iterator}`);
}

// For of String
const nama = 'Moh. Ilham Burhanuddin';

for (const iterator of nama) {
    console.log(iterator);
}


// Arguments
function jumlahAngka() {
    let jumlah = 0;

    for (const iterator of arguments) {
        jumlah += iterator;
    }

    return jumlah;
}

console.log(jumlahAngka(1, 2, 3, 4, 5));


// For in

const mhs = {
    nama: 'Moh. Ilham Burhanuddin',
    umur: 33,
    email: 'ilham.76c@gmail.com'
};

for (const key in mhs) {
    console.log(key);
    console.log(mhs[key]);
}