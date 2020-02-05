let array = [""];
let klovn = 0;
for (let i = 0; i < 64; i++) {

    if (i % 8 === 0 && i > 0) {
        array += "\n";
        if ((klovn % 2) === 0) {
            array += " ";
        }
        klovn++;
    }

    if ((i % 2) === 1) {
        array += "#";
    } else {
        array += " ";
    }
}
console.log(array);