const { Sequelize, QueryTypes } = require('sequelize');

class Database {
    static #instance = null;

    constructor() {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

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

const db = Database.getInstance();
async function getData() {
    return await db.query("SELECT * FROM contacts", { type: QueryTypes.SELECT });
}

getData().then(result => {
    console.log(result);
});