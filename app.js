// const myPromise = new Promise((resolve, reject) => {
//   resolve(43 - 1);
//   reject(new Error('custom error'));
// });

// console.log(myPromise);

// myPromise
//   .catch((err) => {
//     console.log('err inside catch:', err);
//   })
//   .then((value) => {
//     console.log('value inside then:', value);
//     return 'new value for a promise';
//   })
//   .then((value) => {
//     console.log('second then:', value);
//   });

// console.log('after catch');

// const fs = require('fs').promises;

// fs.readFile('./package.json', 'utf8')
//   .then((data) => {
//     const jsonData = JSON.parse(data);
//     jsonData.scripts.test = 'echo "Error: no test specified" && exit 1';
//     return fs.writeFile('./package.json', JSON.stringify(jsonData, null, 2), 'utf8');
//   })
//   .then(() => {
//     console.log('Done!');
//   });

// ПРОМИСИФИКАЦИЯ PROMISIFICATION

// const fs = require('fs');

// function myReadFile(path, options) {
//   return new Promise((res, rej) => {
//     fs.readFile(path, options, (err, data) => {
//       if (err) rej(err);
//       res(data);
//     });
//   });
// }

// myReadFile('./.eslintrc.js', 'utf8')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(console.log);

const fs = require('fs/promises');
const apiCall = require('./api');

// fs.readdir('./files', 'utf8')
//   .then((filenames) => {
//     const arrayOfPromises = filenames.map((filename) => fs.readFile(`./files/${filename}`, 'utf8'));
//     return Promise.all(arrayOfPromises);
//   })
//   .then((datas) => {
//     console.log(datas);
//     const words = datas.map((fileContent) => fileContent.split('\n')).flat();
//     console.log(words);
//     return fs.writeFile('./words.txt', words.join(', '), 'utf8');
//   })
//   .then(() => console.log('Done 2!'));

// ASYNC / AWAIT

// (async function run() {
//   //   const ids = [3, 5, 8, 9, 10];
//   //   const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
//   //   const user = await response.json();
//   //   console.log(user);
//   const ids = [3, 5, 8, 9, 10];
//   try {
//     const arrayOfFetches = ids.map((id) =>
//       fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json()),
//     );
//     const users = await Promise.all(arrayOfFetches);
//     const emails = users.map((user) => user.email);
//     const cities = users.map((user) => user.address.city);
//     await fs.writeFile('./emails.txt', emails.join('\n'), 'utf8');
//     await fs.writeFile('./cities.txt', cities.join('\n'), 'utf8');
//     await fs.appendFile('./cities.txt', '\nNew line', 'utf8');

//     console.log(users);
//   } catch (err) {
//     console.log(err);
//   }
// })();

// console.log(run().then(console.log));

async function countFruits() {
  const fruitNames = ['apples', 'oranges', 'pears', 'limes'];

  console.time();

  const totalCount = await fruitNames.reduce(async (acc, curFruit) => {
    const amount = await apiCall(curFruit);
    const awaitedAcc = await acc;
    return awaitedAcc + amount;
  }, Promise.resolve(0));
  console.timeEnd();

  console.log(totalCount);
}

countFruits();
