var isSquare = function(n){
    let square = Math.sqrt(n);
    if (square % 1 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isSquare(-1));