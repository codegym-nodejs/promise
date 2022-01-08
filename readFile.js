const fs = require('fs');

const readFilePromise = function(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if(err) return reject(err);
       return resolve(data.toString());
    });
  })
}

readFilePromise('./Files/file.txt').then((data) => {
  console.log(data);
}).catch(err => {
  console.error(err);
})