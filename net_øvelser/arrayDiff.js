

arrayDiff([1,2,2,2,3],[2])


function arrayDiff(a, b) {
let meme = [], epic = 0;
for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[j] === b[i]) {
          a[j] = null;
      }
   }
}
for (let index = 0; index < a.length; index++) {
    if (a[index] !== null) {
        meme[epic] = a[index];
        epic++;
    }
    
}
return meme;
}

