const { Sequelize, QueryTypes } = require('sequelize');

// Option 1: Passing a connection URI
//const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
  // dialect: 'sqlite',
  // storage: 'path/to/database.sqlite'
// });

try {
  // Option 2: Passing parameters separately (other dialects)
  const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });
  sequelize.authenticate();
  console.log('Connection has been established successfully.');

  (async () => {
    const result = await sequelize.query("SELECT * FROM contacts", { type: QueryTypes.SELECT });
    console.log(result);
  })();
  // console.log(users)
} catch (error) {
  console.error('Unable to connect to the database:', error);
}