import express from 'express'; 

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
 * Jika membuat dua path yang sama, maka yang digunakan adalah yang pertama 
 */
// app.get('/', (req, res) => {
//   res.send('Hello World! 2');
// }); 

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});