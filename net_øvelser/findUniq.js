function findUniq(arr) {
    let equalNumber;
    if (arr[0] === arr[1]) {
        equalNumber = arr[0];
    } else {
        equalNumber = arr[2];
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== equalNumber) {
            return arr[i];
        }
    }

    

}