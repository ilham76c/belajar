const crypto = require("crypto");

// The `generateKeyPairSync` method accepts two arguments:
// 1. The type ok keys we want, which in this case is "rsa"
// 2. An object with the properties of the key
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  // The standard secure default length for RSA keys is 2048 bits
  modulusLength: 2048,
});

/** 
 * Create Signature
 */
const sign = crypto.createSign('SHA256');
// sign.update('some data to sign');
// sign.end();
const signature = sign.sign(privateKey);

/**
 * Verify Public and Private key
 */
const verify = crypto.createVerify('SHA256');
// verify.update('some data to sign');
// verify.end();
console.log('Verify: ', verify.verify(publicKey, signature));

/**
 * Convert Public Key from Buffer to Plain Text
 */
const encriptPublicKey = crypto.publicEncrypt({
  key: publicKey,
  type: 'pkcs8',
  format: 'pem',
}, Buffer.from('top secret')).toString('base64');

console.log('\n\n------- Public Key -------');
console.log(encriptPublicKey);

/**
 * Convert Private Key from Buffer to Plain Text
 */
const encriptPrivateKey = crypto.privateEncrypt({
  key: privateKey,
  type: 'pkcs8',
  format: 'pem',
  cipher: 'aes-256-cbc',
  padding: crypto.constants.RSA_PKCS1_PADDING
}, Buffer.from('top secret')).toString('base64');

console.log('\n\n------- Private Key -------');
console.log(encriptPrivateKey);
