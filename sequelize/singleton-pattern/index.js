/* import Sequery QueryTypes untuk melakukan query ke database */
const { QueryTypes } = require('sequelize');

/* import class Database */
const { Database } = require('./connection');

/* panggil function getInstance() dari class Database untuk mendapatkan instance */
const db = Database.getInstance();

/* contoh function untuk melakukan query ke database menggunakan instance yang di dapatkan dari class Database */
// async function getData() {
//     return await db.query("SELECT * FROM contacts", { type: QueryTypes.SELECT });
// }

/* panggil function getData() untuk mengeksekusi query */
db.query("SELECT * FROM contacts", { type: QueryTypes.SELECT })
    .then(result => {
        /* jika berhasil tampilkan hasil dari query */
        console.log(result);
    })
    .catch(error => {
        /* jika gagal tampilkan log error */
        console.error(error);
    });