let p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('one'), 10000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('two'), 200);
})

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('three'), 1000);
}) 

let p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('four'), 400);
})

Promise.race([p1,p2,p3,p4]).then(value => {
  console.log(value);
}).catch(err => {
  console.error(err);
})
