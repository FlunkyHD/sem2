let list = [{giver: "Morten", title: "Bajer", tema: "Sjov", dato: "15/02-2020", amount: "400", valuta: "DDK"}, 
            {giver: "Pickle", title: "Kage", tema: "NumNum", dato: "17/02-2020", amount: "150", valuta: "DDK"}];

function add_row(array){
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

add_row(list);