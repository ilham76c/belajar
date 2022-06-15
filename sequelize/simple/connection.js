const { Sequelize } = require('sequelize');
let connection = false;
// Option 1: Passing a connection URI
//const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
  // dialect: 'sqlite',
  // storage: 'path/to/database.sqlite'
// });

module.exports = {
    createConnection: () => {
        try {
            connection = new Sequelize('postgres', 'postgres', 'postgres', {
                host: 'localhost',
                dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
            });
    
            connection.authenticate();
            console.log('Connection has been established successfully.');
    
            return connection;
        } catch (error) {
            console.log(error);
        }
    },
    closeConnection: () => {
        try {
            if (connection !== false) {
                connection.close();    
                console.log('Connection has been closed.')
            }
        } catch (error) {
            console.log(error);
        }
    },
}