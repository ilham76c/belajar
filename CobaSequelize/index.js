const db = require('./connection');

const { QueryTypes } = require('sequelize');

const app = {
  getContacts: async () => {
    try {
      return await db.query("SELECT * FROM contacts", { type: QueryTypes.SELECT });     
    } catch (error) {
      console.error(error);
    }
  },
  // INNER JOIN: mengambil data yang cocok antara left dan right table
  getCustomers1: async () => {
    try {
      const connection = db.createConnection();
      const result = await connection.query(`
        SELECT 
          cus.customer_id, cus.customer_name, con.contact_name, con.phone, con.email
        FROM 
          customers as cus
        INNER JOIN 
          contacts as con
        ON 
          cus.customer_id = con.customer_id;
      `, { type: QueryTypes.SELECT });
      
      db.closeConnection();

      if (result.length) {
        return result;
      }

      return 'Failed to get data customers';
    } catch (error) {
      console.error(error);
    }
  },
  // LEFT JOIN: mengambil data left table yang cocok ataupun yang tidak cocok dengan right table
  getCustomers2: async () => {
    try {
      const connection = db.createConnection();
      const result = await connection.query(`
        SELECT 
          cus.customer_id, cus.customer_name, con.contact_name, con.phone, con.email
        FROM 
          customers as cus
        LEFT JOIN 
          contacts as con
        ON 
          cus.customer_id = con.customer_id;
      `, { type: QueryTypes.SELECT });
      
      db.closeConnection();

      if (result.length) {
        return result;
      }

      return 'Failed to get data customers';
    } catch (error) {
      console.error(error);
    }
  },
  // LEFT OUTER JOIN: mengambil data left table yang tidak cocok dengan right table
  getCustomers3: async () => {
    try {
      const connection = db.createConnection();
      const result = await connection.query(`
        SELECT 
          cus.customer_id, cus.customer_name, con.contact_name, con.phone, con.email
        FROM 
          customers as cus
        LEFT JOIN 
          contacts as con
        ON 
          cus.customer_id = con.customer_id
        WHERE
          con.customer_id IS NULL;
      `, { type: QueryTypes.SELECT });
      
      db.closeConnection();

      if (result.length) {
        return result;
      }

      return 'Failed to get data customers';
    } catch (error) {
      console.error(error);
    }
  },
  // RIGHT JOIN: mengambil data right table yang cocok ataupun tidak cocok dengan left table
  getCustomers4: async () => {
    try {
      const connection = db.createConnection();
      const result = await connection.query(`
        SELECT 
          cus.customer_id, cus.customer_name, con.contact_name, con.phone, con.email
        FROM 
          customers as cus
        RIGHT JOIN 
          contacts as con
        ON 
          cus.customer_id = con.customer_id;
      `, { type: QueryTypes.SELECT });
      
      db.closeConnection();

      if (result.length) {
        return result;
      }

      return 'Failed to get data customers';
    } catch (error) {
      console.error(error);
    }
  },
  // RIGHT OUTER JOIN: mengambil data right table yang tidak cocok dengan left table
  getCustomers5: async () => {
    try {
      const connection = db.createConnection();
      const result = await connection.query(`
        SELECT 
          cus.customer_id, cus.customer_name, con.contact_name, con.phone, con.email
        FROM 
          customers as cus
        RIGHT JOIN 
          contacts as con
        ON 
          cus.customer_id = con.customer_id
        WHERE
          cus.customer_id IS NULL;
      `, { type: QueryTypes.SELECT });
      
      db.closeConnection();

      if (result.length) {
        return result;
      }

      return 'Failed to get data customers';
    } catch (error) {
      console.error(error);
    }
  },
}

app.getCustomers5()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
  