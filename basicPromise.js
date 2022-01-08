let loading = false;
const promise = new Promise((resolve, reject) => {
    loading = true;
    let name = 'Thinh';
    if(name !== 'Le') {
      reject(new Error('Thằng này không phải Thịnh'));
    }
    // resolve(12); 
});

promise.then((value) => {
  console.log(value)
}, (err) => {
  return new Error("Ngu si");
}).catch(err => {
  console.error(err);
}).finally(() => {
  loading = false;
})