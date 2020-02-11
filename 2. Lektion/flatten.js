let arrays = [[1, 2, 3], [4, 5], [6]];

let flat = arrays.reduce((acc, value) => acc.concat(value));

console.log(flat);