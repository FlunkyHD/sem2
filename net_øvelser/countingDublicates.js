function duplicateCount(text){
    let string = Array.from(text.toLowerCase());
    let temp_currance;
    let occurances = [];
    let duplicates = 0;

    for (let i = 0; i < string.length; i++) {
        temp_currance = 0;
        if (string[i] == "") {
            continue;
        }
        for (let j = 0; j < string.length; j++) {
            if (string[i] == string[j] && i !== j) {
                temp_currance++;
                string[j] = "";
            }
        }
        occurances[i] = temp_currance;
    }
    for (let k = 0; k < occurances.length; k++) {
        if (occurances[k] >= 1) {
            duplicates++;
        }
    }
    return duplicates;
}


console.log(duplicateCount("aabBcde"));