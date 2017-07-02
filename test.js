var test = require('./index.js');

console.log(test);
var rgba = test({
   luminosity: 'dark',
   format: 'rgba',
   alpha: 1 
});

console.log(rgba);
