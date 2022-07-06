function samplePromise() {
  return Promise.resolve('ilham');
}

// await tanpa async function berjalan di node.js versi 16^
const name = await samplePromise();
console.log(name);