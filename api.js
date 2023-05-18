const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function apiCall(fruitName) {
  switch (fruitName) {
    case 'apples':
      await wait(2000);
      return 30;
    case 'oranges':
      await wait(2000);
      return 25;
    case 'pears':
      await wait(2000);
      return 48;
    case 'limes':
      await wait(2000);
      return 13;
    default:
      return 0;
  }
}

module.exports = apiCall;
