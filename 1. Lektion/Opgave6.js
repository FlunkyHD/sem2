let array = ["Hej", "med", "dig", "jeg", "hedder", "Kaj", "bonderov"];
/*
function average_length_array(array){
    let total = 0,
        word_count = array.length,
        // new_array = [];

    // new_array = array.map(a => a.length);
    total = array.reduce((value, string) => value + string.length, 0);

    return total / word_count;
}

console.log(average_length_array(array));
*/

function banger_info(array){
    function average_length(array){
        let total1 = array.reduce((value, string) => value + string.length, 0);

        return total1 / array.length;
    }
    function minimum(array){
        let temp_array = array.map(string => string.length);

        return Math.min(...temp_array);
    }
    function maximum(array){
        let temp_array = array.map(string => string.length);

        return Math.max(...temp_array);
    }
    function median(array){
        let temp_array = array.sort((a, b) => a.length - b.length);

        let half = Math.floor(array.length / 2);

        if (half % 2 === 1){
            return temp_array[half];
        }

        return (temp_array[half - 1] + temp_array[half]) / 2.0;
    }

    let object = {
        min: minimum(array),
        max: maximum(array),
        average: average_length(array),
        medi: median(array)
    };

    return object;
}

console.log(banger_info(array));