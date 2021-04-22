// Destructing Array

let arr = ['Nama', 'saya', 'ilham', 'hehe'];
let [a, b, c, d] = arr;
console.log(c);

let arr2 = ['Nama', 'saya', 'ilham', 'hehe'];
let [a2, , , z] = arr2;
console.log(z);


// Swap Items
let sw1 = 'moh';
let sw2 = 'ilham';

[sw1, sw2] = [sw2, sw1];
console.log(sw1);


// return value pada function
function coba() {
    return ['mas', 'jos'];
}

let [data1, data2] = coba();
console.log(data1);


// Reset Parameter
let [val1, val2, val3, ...values] = ['a','b','c','d','e'];
// console.log(val2);
console.log(values);



// Destructing Object
let mhs = {
    nama: 'burhanuddin',
    umur: 23
};

/** nama variable harus sama dengan property di mhs
 */ 
let { nama, umur } = mhs;
console.log(umur)


// Assignment tanpa deklarasi Object
// ({ nama2, umur2 }  = { nama2: 'burhanuddin', umur2: 23 });

// console.log(umur2)


// Assign ke variable baru
let mhs2 = {
    nama: 'burhanuddin',
    umur: 23
};

let { nama: name, umur: age} = mhs2;
console.log(nama);


// Memberika default value
let mhs3 = {
    nama3: 'burhanuddin',
    umur3: 23
};

let { nama3, umur3, email = 'ilham.76c@gmail.com'} = mhs3;
console.log(email);


// Rest Parameter
let mhs4 = {
    nama4: 'burhanuddin',
    umur4: 23,
    alamat: 'bangkalan'
};

let {nama4, ...val} = mhs4;
console.log(val);


// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
let mhs5 = {
    id: 12,
    nama5: 'burhanuddin',
    umur5: 23,
    alamat5: 'bangkalan'
};

function getIdMhs5({ id }) {
    return id;
}

console.log(getIdMhs5(mhs5));