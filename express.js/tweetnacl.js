const nacl = require('tweetnacl');

const create = nacl.box.keyPair();

console.log(create);