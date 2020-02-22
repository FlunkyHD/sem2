class Transaction {
    constructor(name, topic, date, amount, currency) {
        this.name = name;
        this.topic = topic;
        this.date = date;
        this.amount = amount;
        this.currency = currency;
    }
    add_row(row){
        row.insertCell(0).innerHTML = this.name;
        row.insertCell(1).innerHTML = this.topic;
        row.insertCell(2).innerHTML = this.date;
        row.insertCell(3).innerHTML = this.amount;
        row.insertCell(4).innerHTML = this.currency;
    }
}

let list = [{name: "Morten", topic: "Bajer", date: "15/02-2020", amount: "400", currency: "DDK"}, 
            {name: "Pickle", topic: "Kage", date: "17/02-2020", amount: "150", currency: "DDK"}];

let add = document.getElementById("input_epic");
add.addEventListener("click", add_value);

function add_value() {
    let epic = new Transaction(
        document.getElementById("name_value").value,
        document.getElementById("topic_value").value,
        document.getElementById("date_value").value,
        document.getElementById("amount_value").value,
        document.getElementById("currency_value").value
    );
    add_single_row(epic);
}

function add_rows(array){
    let table = document.getElementById("liste_udgifter");

        for (const udgift of array) {
            let row = table.insertRow(table.rows.length);

            row.insertCell(0).innerHTML = udgift.name;
            row.insertCell(1).innerHTML = udgift.topic;
            row.insertCell(2).innerHTML = udgift.date;
            row.insertCell(3).innerHTML = udgift.amount;
            row.insertCell(4).innerHTML = udgift.currency;
        }  
}

function add_single_row(object){
    let table = document.getElementById("liste_udgifter");
    let row = table.insertRow(table.rows.length);

    object.add_row(row);
}
add_rows(list);


async function insertExpenses() {
    async function fetchExpenses() {
        try {
            const fetched_expenses = await fetch(`http://127.0.0.1:3000/expenses`)
                                                .then((data) => data.json());
            return fetched_expenses;
        } catch (err) {
            console.log("FETCH ERROR! " + err);
        }
    }
    await fetchExpenses().then(add_rows)
            .then(() => console.log("Fetch and insertion SUCCES!"))
            .catch(err => { console.log("Insertion of expenses FAILURE: " + err) });
}

insertExpenses();

async function insertFact() {
    let position = document.getElementById("chuck_norris");
    async function fetchFact() {
        try {
            const fetched_expenses = await fetch(`https://api.chucknorris.io/jokes/random`)
                .then((data) => data.json());
            return fetched_expenses;
        } catch (err) {
            console.log("FETCH ERROR! " + err);
        }
    }
    await fetchFact().then(message => {position.innerHTML += message.value});
}

insertFact();

/* Til test af fetch
fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        console.log(myJson);
    });
*/
