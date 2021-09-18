const db = require('./connection').createConnection();

const { QueryTypes } = require('sequelize');

const app = {
  getContacts: async () => {
    try {
      return await db.query("SELECT * FROM contacts", { type: QueryTypes.SELECT });     
    } catch (error) {
      console.error(error);
    }
  }
}

app.getContacts()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  })