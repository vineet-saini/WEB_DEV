// const { createHmac } = require('crypto');

// const secret = 'abcdefg';
// const hash = createHmac('sha256', secret)
//                .update('I love cupcakes')
//                .digest('hex');
// console.log(hash);
// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e


// let crypto;
// try {
//   crypto = await import('node:crypto');
// } catch (err) {
//   console.error('crypto support is disabled!');
// }

//HASH

// const {
//   createHash,
// } = require('node:crypto');

// const hash = createHash('sha256');

// hash.on('readable', () => {
//   // Only one element is going to be produced by the
//   // hash stream.
//   const data = hash.read();
//   if (data) {
//     console.log(data.toString('hex'));
//     // Prints:
//     //   6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50
//   }
// });

// hash.write('some data to hash');
// hash.end();


// Calculate a rolling hash.
// const {
//   createHash,
// } = require('node:crypto');

// const hash = createHash('sha256');

// hash.update('one');
// console.log(hash.copy().digest('hex'));

// hash.update('two');
// console.log(hash.copy().digest('hex'));

// hash.update('three');
// console.log(hash.copy().digest('hex'));


// 7692c3ad3540bb803c020b3aee66cd8887123234ea0c6e7143c0add73ff431ed
// 25b6746d5172ed6352966a013d93ac846e1110d5a25e8f183b5931f4688842a1
// 4592092e1061c7ea85af2aed194621cc17a2762bae33a79bf8ce33fd0168b801


//Sign 

const {
  generateKeyPairSync,
  createSign,
  createVerify,
} = require('node:crypto');

const { privateKey, publicKey } = generateKeyPairSync('ec', {
  namedCurve: 'sect239k1',
});

const sign = createSign('SHA256');
sign.write('some data to sign');
sign.end();
const signature = sign.sign(privateKey, 'hex');

const verify = createVerify('SHA256');
verify.write('some data to sign');
verify.end();
console.log(verify.verify(publicKey, signature, 'hex'));
// it prints: true