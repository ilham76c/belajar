const db = require('./connection').createConnection();

const { QueryTypes } = require('sequelize');

const app = {
  getContacts: async () => {
    try {
      return await db.query("SELECT * FROM contacts", { type: QueryTypes.SELECT });     
    } catch (error) {
      console.error(error);
    }
  },
  getCustomers: async () => {
    try {
      return await db.query(`
        SELECT * FROM customers
          LEFT JOIN contacts
          ON 
            customers.customer_id = contacts.customer_id
          WHERE 
            contacts.customer_id IS NOT NULL;
      `, { type: QueryTypes.SELECT });     
    } catch (error) {
      console.error(error);
    }
  },
}

app.getCustomers()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  })