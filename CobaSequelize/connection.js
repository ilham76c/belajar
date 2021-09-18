const { Sequelize } = require('sequelize');

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
            const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
                host: 'localhost',
                dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
            });
    
            sequelize.authenticate();
            console.log('Connection has been established successfully.');
    
            return sequelize;
        } catch (error) {
            console.log(error);
        }
    },
}