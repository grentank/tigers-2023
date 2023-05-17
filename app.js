// console.log(0);

// setTimeout(() => {
//   console.log(1);
// }, 0);

// let b = 0;

// for (let i = 0; i < 1e10; i += 1) {
//   b -= 1;
// }

// console.log(2);

// let counter = 0;

// const intervalId = setInterval(() => {
//   counter += 1;
//   console.log(counter);
//   if (counter === 5) clearInterval(intervalId);
// }, 1000);

const bcrypt = require('bcrypt');

const passwords = ['123', 'qwerty', '0000'];

// const hash = bcrypt.hashSync(......)

// const hashes = passwords.map((password) => bcrypt.hashSync(password, 15));

// const hashes = [];
// console.time();

// bcrypt.hash(passwords[0], 15, (hash0Error, hash0) => {
//   if (hash0Error) throw new Error(hash0Error);
//   hashes.push(hash0);

//   bcrypt.hash(passwords[1], 15, (hash1Error, hash1) => {
//     if (hash1Error) throw new Error(hash1Error);
//     hashes.push(hash1);

//     bcrypt.hash(passwords[2], 15, (hash2Error, hash2) => {
//       if (hash2Error) throw new Error(hash2Error);

//       console.timeEnd();
//       hashes.push(hash2);
//       console.log(hashes);
//     });
//   });
// });

// const hashes = [];
// console.time();

// bcrypt.hash(passwords[0], 15, (hash0Error, hash0) => {
//   if (hash0Error) throw new Error(hash0Error);
//   hashes.push(hash0);
//   console.log('0 hash');
// });

// bcrypt.hash(passwords[1], 15, (hash1Error, hash1) => {
//   if (hash1Error) throw new Error(hash1Error);
//   hashes.push(hash1);
//   console.log('1 hash');
//   console.timeEnd();
//   console.log(hashes);
// });

// bcrypt.hash(passwords[2], 15, (hash2Error, hash2) => {
//   if (hash2Error) throw new Error(hash2Error);
//   hashes.push(hash2);
//   console.log('2 hash');
// });

// const hashes = [];
// console.time();

// passwords.forEach((password) => {
//   bcrypt.hash(password, 15, (hashError, hash) => {
//     hashes.push(hash);

//     if (hashes.length === passwords.length) {
//       console.timeEnd();
//       console.log(hashes);
//     }
//   });
// });

const fs = require('fs');

// fs.readFile('./files/honeyeaters.txt', 'utf8', (err, data) => {
//   if (err) throw new Error(err);

//   console.log(data.split('\n'));
// });

fs.readdir('./files', 'utf8', (errDir, filenames) => {
  if (errDir) throw new Error(errDir);
  const names = [];
  let counter = 0;

  filenames.forEach((filename) => {
    fs.readFile(`./files/${filename}`, 'utf8', (errRead, data) => {
      if (errRead) throw new Error(errRead);

      counter += 1;
      names.push(...data.split('\n'));
      if (counter === filenames.length) {
        fs.writeFile('./students.txt', names.join(', '), 'utf8', (errWrite) => {
          if (errWrite) throw new Error(errWrite);

          console.log('Done!');
        });
      }
    });
  });
});
