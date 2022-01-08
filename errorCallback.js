const promise = new Promise((resolve, reject)=> {
  setTimeout(resolve, 500, 'One');
});

promise.then(value => {
  console.log(value);
  return Promise.reject(new Error('Lỗi sau khi trả về one'))
}).then((value) => console.log(value), err => console.error(err));