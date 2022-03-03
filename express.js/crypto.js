const fs = require("fs");
const crypto = require("crypto");

// The `generateKeyPairSync` method accepts two arguments:
// 1. The type ok keys we want, which in this case is "rsa"
// 2. An object with the properties of the key
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  // The standard secure default length for RSA keys is 2048 bits
  modulusLength: 2048,
  // publicKeyEncoding: {
  //   type: 'spki',
  //   format: 'pem'
  // },
  // privateKeyEncoding: {
  //   type: 'pkcs8',
  //   format: 'pem',
  //   cipher: 'aes-256-cbc',
  //   passphrase: 'top secret'
  // }
});

// const sign = crypto.createSign('RSA-SHA256').update('psst').sign({
//   key: privateKey,
//   passphrase: 'password'
// }, 'hex');
// const decrypted = crypto.privateDecrypt({
//   key: privateKey.toString(),
//   passphrase: 'top secret',
// }, Buffer.from('aes-256-cbc', "rsa"));

const sign = crypto.createSign('SHA256');
// sign.update('some data to sign');
sign.end();
const signature = sign.sign(privateKey);
console.log(crypto.privateEncrypt({
  key: privateKey,
  type: 'pkcs8',
  format: 'pem',
  cipher: 'aes-256-cbc',
  padding: crypto.constants.RSA_PKCS1_PADDING
}, Buffer.from('top secret')).toString('base64'));
// const signature = sign.sign({
//   key: privateKey,
//   format: 'pem',
//   type: 'pkcs8',
//   passphrase: 'top secret',
// });

// fs.appendFile('key.txt', signature.toString(), (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });

// const verify = crypto.createVerify('SHA256');
// verify.update('some data to sign');
// verify.end();
// console.log(verify.verify(publicKey, signature));
console.log(publicKey);
console.log('\n\n');
console.log(privateKey);
console.log('\n\n');
// console.log(signature);
