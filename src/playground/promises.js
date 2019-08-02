const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'test',
    //   age: 25
    // });
    reject('something went wrong');
  }, 3000);
});

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log('error: ', error);
});

// promise.then((data) => {
//   console.log(data);
// }, (error) => {
//   console.log(error);
// });

console.log('after');