let uniqueInOrder=function(iterable){
    let array = [], index = 0;
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] === iterable[i + 1]) {
                
            
            continue;
            } else {
                array[index] = iterable[i];
                index++;
            }
        
    }
    return array;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));