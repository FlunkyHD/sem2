let ales = ["Bitter", "Pale Ale", "Brown Ale", "Trappist", "Porter",  "Weizenbier"];
let lagers =["Pilsner", "Münchener", "Wiener", "Bock", "Porter"];
let wilds =["Gueuze", "Faro", "Fruit"];
function showAleDropdown(){
    let elem=document.getElementById("selectStamType");
    console.log(elem.innerHTML);
    elem.innerHTML=renderDropdown(ales);
    elem.disabled=false;
}
function showLagerDropdown(){
    let elem=document.getElementById("selectStamType");
    console.log(elem.innerHTML);
    elem.innerHTML=renderDropdown(lagers);
    elem.disabled=false;
}
function showWildDropdown(){
    let elem=document.getElementById("selectStamType");
    console.log(elem.innerHTML);
    elem.innerHTML=renderDropdown(wilds);
}
function renderDropdown(beers){
    let dropdownList="";
    for (const beer of beers){
     dropdownList+="<option value=\"\">" + beer + "</option>\n";
    }
    return dropdownList;
}
function renderBeerSelection(ol){
    let dropdownList="";
    let ols=ol.length;
    let i=0;
    if(ols>5) ols=5; //show first 5 matches
    for (const beer of ol){
     dropdownList+="<option value=\"\">" + beer[1] + "</option>\n";
    }
    return dropdownList;
}
function listOl(){
    tb=document.getElementById("olTabelListe");
     
    for(let i=0;i<ol.length;i++){
       tb.innerHTML+=`<tr class=\"ol-tabel-row-${i%2}\"> <td> ${ol[i][0]} </td> <td> score? </td> </tr>`;
    }
    console.log(tb.innerHTML)
}

let beerTypes = {
"Ale": {
        "Bitter":{},
        "Pale Ale":{},
        "Brown Ale":{},
        "Trappist":{}, 
        "Porter":{}, 
        "Weizenbier":{}
    },
"Lager": {
    "Pilsner":{},
    "Münchener":{},
    "Wiener":{},
    "Bock":{},
    "Porter":{}
    },
"Lambic": {
    "Gueuze":{},
    "Faro":{},
    "Fruit":{}
    }
}  

