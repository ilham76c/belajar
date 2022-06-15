/* import library Sequelize */
const { Sequelize } = require('sequelize');

class Database {
    /* property untuk menampung instance yang dibuat */
    static #instance = null;

    /* function untuk membuat instance object koneksi ke database */
    static getInstance() {
        try {
            if (this.#instance === null) {
                this.#instance = new Sequelize('postgres', 'postgres', 'postgres', {
                    host: 'localhost',
                    dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
                });

                this.#instance.authenticate();
                console.log('Connection has been established successfully.');
    
                return this.#instance;
            }   

            return this.#instance;
        } catch (error) {
            console.error(error);
        }
    }

    /* function untuk menghapus atau mengganti instance yang tersimpan pada property "#instance" dengan nilai "null" */
    static destroyInstance() {
        try {
            if (this.#instance !== null) {
                this.#instance = null;

                console.log('Connection has been destroyed.');
            }

            console.log('Connection already destroyed.');
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = {
    Database,
};
