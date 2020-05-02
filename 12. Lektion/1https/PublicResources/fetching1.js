'use strict'

async function fetch_it(resolve, reject) {

  let user = { name: 'Morten', surname: 'Jørgensen' };

  let response = await fetch('http://127.0.0.1:3000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });

  if(response.ok) {
    console.log("POST request was ok")
    let result = await response.json();
    console.log(result);

    console.log(JSON.stringify(response));
    console.log(JSON.stringify(result));
  } else {
    console.log("HTTP-Error: " + response.status);
    reject("it's a mess")
  }
}

new Promise(fetch_it).then(result => console.log(result)).catch(console.log);

