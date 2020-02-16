let list = [{giver: "Morten", title: "Bajer", tema: "Sjov", dato: "15/02-2020", amount: "400", valuta: "DDK"}, 
            {giver: "Pickle", title: "Kage", tema: "NumNum", dato: "17/02-2020", amount: "150", valuta: "DDK"}];

let add = document.getElementById("input_epic");
add.addEventListener("click", add_value);

function add_value() {
    let temp = {
        giver: "Test",
        title: document.getElementById("title_value").value,
        tema: document.getElementById("tema_value").value,
        dato: document.getElementById("dato_value").value,
        amount: document.getElementById("amount_value").value,
        valuta: document.getElementById("valuta_value").value
    };
    /*
    let title = document.getElementById("title_value").value;
    let tema = document.getElementById("tema_value").value;
    let dato = document.getElementById("dato_value").value;
    let amount = document.getElementById("amount_value").value;
    let valuta = document.getElementById("valuta_value").value;
    */
    add_single_row(temp);
}

function add_rows(array){
    let table = document.getElementById("liste_udgifter");

        for (const udgift of array) {
            let row = table.insertRow(table.rows.length);

            let giver = row.insertCell(0);
            let title = row.insertCell(1);
            let tema = row.insertCell(2);
            let dato = row.insertCell(3);
            let amount = row.insertCell(4);
            let valuta = row.insertCell(5);

            giver.innerHTML = udgift.giver;
            title.innerHTML = udgift.title;
            tema.innerHTML = udgift.tema;
            dato.innerHTML = udgift.dato;
            amount.innerHTML = udgift.amount;
            valuta.innerHTML = udgift.valuta;
        }  
}

function add_single_row(object){
    let table = document.getElementById("liste_udgifter");
    let row = table.insertRow(table.rows.length);

    let giver = row.insertCell(0);
    let title = row.insertCell(1);
    let tema = row.insertCell(2);
    let dato = row.insertCell(3);
    let amount = row.insertCell(4);
    let valuta = row.insertCell(5);

    giver.innerHTML = object.giver;
    title.innerHTML = object.title;
    tema.innerHTML = object.tema;
    dato.innerHTML = object.dato;
    amount.innerHTML = object.amount;
    valuta.innerHTML = object.valuta;
}
add_rows(list);
