let array = ["Hej", "med", "dig", "jeg", "hedder", "Kaj", "bonderov"];

function average_length_array(array){
    let total = 0,
        word_count = array.length,
        new_array = [];

    new_array = array.map(a => a.length);
    total = new_array.reduce((total, b) => total + b);
    //   let wordLength = strings.reduce((value, string) => value + string.length, 0);

    return total / word_count;
}

console.log(average_length_array(array));