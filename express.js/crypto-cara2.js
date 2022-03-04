const fs = require("fs");
const crypto = require("crypto");

// The `generateKeyPairSync` method accepts two arguments:
// 1. The type ok keys we want, which in this case is "rsa"
// 2. An object with the properties of the key
// const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
//   // The standard secure default length for RSA keys is 2048 bits
//   modulusLength: 2048,
//   publicKeyEncoding: {
//     type: 'spki',
//     format: 'pem'
//   },
//   privateKeyEncoding: {
//     type: 'pkcs8',
//     format: 'pem',
//     cipher: 'aes-256-cbc',
//     passphrase: 'top secret'
//   }
// });

const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1WhVbV6z5qlVQfI3+hiu
xXHoqkK+3VS/QUnJMv+IZ9dA8p8m+EOKXk1JWc498kr6WWOyKY/sZYQfp0NCElFq
ikm2mb5Jj32/dYoLqYfFURtlik0HWcyI053dOdoPdqLhBn6iQayfUlGB45dClwS4
8ODH/0waE/DpE428JppkU2kTd6yWZ285IBfnPyZCn/XS0NrQ38fKp4OovKwwVma1
8h7s0INEjaI7z1cKFa8U6E8yNY/5ZGQ8UKFs3rxKXebU2Ya/OVxtfDa0WHmukfok
d6o2QF47ZyMZHSb6duczvgpyQLSQ/BGCgA8x3WdwrONVTXdNbdA06ub/UswKvkLf
TwIDAQAB
-----END PUBLIC KEY-----`;
const privateKey = `-----BEGIN ENCRYPTED PRIVATE KEY-----
MIIFLTBXBgkqhkiG9w0BBQ0wSjApBgkqhkiG9w0BBQwwHAQIQaqYtZ4+dC0CAggA
MAwGCCqGSIb3DQIJBQAwHQYJYIZIAWUDBAEqBBAXUB8iJbTZ4UwIwhCvmqnlBIIE
0C8Ib1TJ4DKyMQvUtRBQFCxYgT4UK7Cc3I4gLodYvrVLcNEpC0RL+s18UsvMPQIz
L0m4fhZPEkA/KTLMV3Z3UuLMnLIxcRe1+bJ6DMD62xiebNefsdsC9m3oBZ7SbIpo
PgjXDKXu8JUS6zm52hR2oDwzAcl8Hp0ar4duL+gjMLQSY2mvwDgLoxkSxd8zPv6o
V/aTLWpAsmZfq4scSOovC16gfkN6XPs7COkDxkMBzeP1kNGh8mWDNkguSDD0KSPz
h1Gntn3bY0LgMcvcTycnZF77WHMXfky+vO0BoJY4JMCYR5lOX6CxzzlIv39NGpAw
g17Nyj24Jh+4uhbeQGomofRSWJjCR2x7aarmnwkK9ievUYnt5p/dPFFXifi6osAd
RtsmTeW520J572zfjWntiioIiU/3f04fd0hyaz6H3xaYxJGLGYMN1YsyX2CrhteR
y/OMux1S/K+XWkaZJkBg9kZpez0EQiZsnKcekuCxJnW9+Nnue7vAaagguK50a0Y9
VPCysxjUv6QdYcNLSZL1v0K2EKep8652iI9RwgKfRcwtaI4MrQJOKFL9JaZfFthf
3MvFyUlB1OPTLf/5W4fKYBxdMeBGTOZhSls7m9LSRR/fqYjaGrdN/PM7/h2zd1lN
m6fzeo+wf0UZF/SVETlXeAPyigpB5MrFnaxwhZFfuNetfwXVLjlbMtJYe5WxkjzO
nUDaBAEdqY/zkIOnOtMyDij4jLWQvHDDoM5zsPKNJV/iRuybqh4PWimYYb4TS5Iz
OlOCyNyHo34Z/bZbO2qCkmLTl+uwjesvN/9u3gEMDM2HqZ2SXxkWN6xTsfkn7bNm
OymG7E9vhw0qKyQLiAjTKfpLXhn1NHh2EyAwgVF3rFuAMlNHyaqKMm4Pv+ykTLh/
WigUqYXBwKVob0xngPWYcuDH+jve/fga8zk5639wSxwUHnq55qxYS4Gyo3NCRSlY
gAN8DeHXDXZqeiOSOU56bAjpdMGD4bJkc7qKxnYWtAVhWxlMJDRc4uTuiJYdCeVR
gcqThMw0RdxkTL7LtOTt85udQVR1uEjHWt82zO+3c75dI8YWyoAK4kAeAu7dex0Z
/CVtKy9Hpd+xJoKu/4Uxh14nLNFIVq/HBdfDxIHpH+XgKs1CzHW7kM1AdwIrHCIJ
Etch3vq0axhRclQpi0qy3Y8aa61h+jZ7ZSsssLYsFnabbK6zvoLWbCQ0TLbtJvG3
1qImxyy58CsHI0o2ih/lqhoABW7ruVEPjFHd1cCABBdxvFJkVBlvGvT4tiMXjZ6Q
ZXdO7qMAirjOJQu2qH/bKjlkEPiI1S3lrJ+L+Qll5UIz/MbgaPRlfIPNpcDAMD2o
9ujAVgGKRINtIgrVWmCgaZOYukHnwd8/vktVa3HeyXfngW+YxrDkDbjVpXtNje6b
IGaQmnp7F+INdS8qpFu9f6kXQFy3rEtQUKantAu3Oo8iuhI+wQcBuwRU9Dedep72
qi02MiCcVjQvPeBGH6yXl8DTVxQ/p4o4AqEkSZC5IqRJ3+J6Id5rK0OIqJUsbSPS
YM8Oc54Zwrb/CDztty+dIkdlTJBNSJ4FflFuCJaAHzZiC8nAb0aZsFG/FejtoyMx
/U37fbDZKECcztItppUaUP281LKjk4vq/FzQIudtMjxG
-----END ENCRYPTED PRIVATE KEY-----`;

fs.appendFile('key.txt', privateKey, (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
fs.appendFile('key.txt', publicKey, (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
// const sign = crypto.createSign('RSA-SHA256').update('psst').sign({
//   key: privateKey,
//   passphrase: 'password'
// }, 'hex');
// const decrypted = crypto.privateDecrypt({
//   key: privateKey.toString(),
//   passphrase: 'top secret',
// }, Buffer.from('aes-256-cbc', "rsa"));

/** 
 * Create Signature
 */
const sign = crypto.createSign('SHA256');
// sign.update('some data to sign');
// sign.end();
const signature = sign.sign({
  key: privateKey,
  format: 'pem',
  type: 'pkcs8',
  passphrase: 'top secret',
});

/**
 * Verify Public and Private key
 */
const verify = crypto.createVerify('SHA256');
// verify.update('some data to sign');
// verify.end();
console.log('Verify: ', verify.verify(publicKey, signature));
console.log(publicKey);
console.log('\n');
console.log(privateKey);
