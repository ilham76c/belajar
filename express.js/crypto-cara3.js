// Node.js program to demonstrate the
// crypto.privateDecrypt() method

// Including crypto and fs module
const crypto = require('crypto');
const fs = require("fs");

// Using a function generateKeyFiles
// const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
//   modulusLength: 2048,
//   publicKeyEncoding: {
//     type: 'spki',
//     format: 'pem'
//   },
//   privateKeyEncoding: {
//     type: 'pkcs8',
//     format: 'pem',
//     cipher: 'aes-256-cbc',
//     passphrase: 'password'
//   }
// });

 // Creating public and private key file 
//  fs.writeFileSync("public_key", publicKey);
//  fs.writeFileSync("private_key", privateKey);
// const publicKey = `-----BEGIN PUBLIC KEY-----
// MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwvESp0YYOOzzTFo8wWIA
// 9fQIr/nA/UwPHfgdHgZQY6HOoeGHJalE33kNIsIXiXZNdSDsG6xKVbKUGBFbDPU9
// PWkJ1KlU6BxtSUpjDUhhtBmbVg20Qo7S71t8bc/DGoMTktL+7T7KlkJh/y6PclXJ
// sWTwwZqjV/VMCJs6HETgnpPyj47PlW4H430FIc0CxhilBk1kmZbO21L7hG0LoNZx
// DHNfUf/tBRzGmh0WOnMjeOGQSI883OmaICg1GRCc+JpI+VbVRnylU5Md8o2u8gtY
// 5aO9RLEjD0G7QLYTuwZvoAchCLYHYTaKHZOaVoBzJLiY86Emo1riW0O4Kuw4bvzk
// PQIDAQAB
// -----END PUBLIC KEY-----`;

// const privateKey = `-----BEGIN ENCRYPTED PRIVATE KEY-----
// MIIFLTBXBgkqhkiG9w0BBQ0wSjApBgkqhkiG9w0BBQwwHAQI6CzNpDj1oCsCAggA
// MAwGCCqGSIb3DQIJBQAwHQYJYIZIAWUDBAEqBBBgixMpL1IQ7bXAzR+37MclBIIE
// 0Adr3HwdDKUUOsi4rHLfUPjiVTjL1P3jHEC16YMxI/VILmeqT+h7BQkR9zj14X8h
// 7gumkT/jIJlXAjaYvHrZdsWFvWzYYOWvvsg0KJ0DfRR5HYWMhQEU8Co71B/2zr2d
// VSo0bsAgeJptKHlN19vxaJM8iOLTJSipDdgp82KNuh4J0npxbRER/oD06GHwt9ep
// ev78m2oJyUNw8P0GvTIe57aBjgSLyigahBMGO7KNJk3kAFuNNmnF4vXblv9B1hzM
// ZXZGBOGJflVaXseNWTvEHkEG3cqPP8zwawu6phSRracjGW9vJkXu0b6Rfi3IqE5u
// BDokQ2vyyCw3ee+kVbObeObSuZ606i/tRLHuAOJ7nN2p3p3C8/bNaTQcHYxXGoK9
// Hr3WSUZmnJltVmT9QMAgd5FLYKoWfFfqrSpkXNJICFYpNw+yRlqC+aezPAA8QePz
// Ao/zHm/Uulvh7W8o1WNvj0CZUKJ0jt+0tc852k50MheHvTqcHaX5jIwcbJp9YBFZ
// WOV+XCdS+VKLLXlWFgIcGQWmqI/JFY6jzkSOvvM66wNK3acofqEQt7ZQveykUisZ
// GgwEDzy9UMNUMK0XUcNYpUPrRN/4kbA6nttu2zUc3l9ANZxJ7G/h7GSGCebPb6u6
// yrCYh6RZqyD4qaQTd2g07/ku9YxluS4+5OAObjfO6zjUr/k4cGgr5BH2RsEIVW11
// S5rRDrlnNYsrs6rq2PJlCo18mDZz8/EugqJfb3ZbUC4lsdQSTMC7wisauOuRVx41
// mqsP06bw8BXYicDxEjw9MbCNojV9F07tPrOgqJ+9nhfn/LlTAjh/rFPQgnStkyvh
// zdepGt6az51syrtpQl+0S0XsQO8ikVuibUDBZiTgHqUJO2XbMj4kh1pu7n3+zunO
// uAH4jrQl8JV5SRQTippjoHE3sBBnWVsGQUYMq51bmITyJ4lyNBlKBq68py7zsVzJ
// L41+OZtl/C948ahg9Z/FWZ1jCmFEFVJsJENQP4/8pID+JXF1Ej9QmAWwfP93w2/O
// fSnMti249gsk5CR3rE+KGtsypk9lGFITD3Qfsx7POuJ5tUTIWRwJccxaNWoG7L+3
// cHOZPh9ytZl8p6Rb5+0iQ0QJct/DbD+qWOsugc28EgiS9cJmXlaeR+VbIqaAXi0f
// J1/tRsbu+GtC+4IrQlLes7HtsoGRJl0kg/KfuUMIycjTzhCv6ZcN1nitmxfKIATF
// dzz0hhw6xJckipm8kCXsfSAVzM0bzYA0uBpf4/9MGzYVAWbL5GKpd4MxqkFEbGdc
// yXhBtQW9F2PcpXGn31td/vIzEb54wGzyidJZoauJP3A08rmB/vCygyQ4IYD0Nw8X
// axiSDYOcTIeDm+LuifXNT/iUn59BqW5IEm81s6qOK8EzHwzqXoyh3heKrwwyK9/8
// 4a+Xl9Ad9tWh/9PsDrJZRqh3gvxx9Omv4DrrvZ0CGqboPxO/vLfA/8tG9CYdHLwf
// v2i+XsOHCDTNn27ZP8l8nieheedSh9plXKI9UxObyIAvHq8jApV57uWgVBnxStbr
// TMhZIWBDO2ebU5JEdYH9REFKysgPMfNieFNtKzApWzIud7LgBMyWuWIuED1P5+bY
// d0K4dPM1r3myjfjzXbW5VTLqKPguXoXwFHiVYB8WZJwF
// -----END ENCRYPTED PRIVATE KEY-----`;

// Creating a function to encrypt string
function encryptString (plaintext, publicKeyFile) {
	const publicKey = fs.readFileSync(publicKeyFile, "utf8");

	// publicEncrypt() method with its parameters
	const encrypted = crypto.publicEncrypt(
			publicKey, Buffer.from(plaintext));

	return encrypted.toString("base64");
}

// Creating a function to decrypt string
function decryptString (ciphertext, privateKeyFile) {
	const privateKey = fs.readFileSync(privateKeyFile, "utf8");

	// privateDecrypt() method with its parameters
	const decrypted = crypto.privateDecrypt(
		{
			key: privateKey,
			passphrase: 'password',
		},
		Buffer.from(ciphertext, "base64")
	);

	return decrypted.toString("utf8");
}

// Defining a text to be encrypted
const plainText = {
  username: 'ilham',
  role: 'admin'
}

// Defining encrypted text
const encrypted = encryptString(JSON.stringify(plainText), "./public_key");

// Prints plain text
console.log("Plaintext:", plainText);
console.log();

// Prints buffer of encrypted content
console.log("Encrypted Text: ", encrypted);
console.log();

// Prints buffer of decrypted content
console.log("Decrypted Text: ", decryptString(encrypted, "private_key"));
