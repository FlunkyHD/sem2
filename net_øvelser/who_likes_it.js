
console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));


function likes(names) {
  // TODO
  antalPersoner = names.length;
  string = "";
  
  for (i = 0; i < antalPersoner; i++){
    string += names[i];
    if (antalPersoner > 1 && i < (antalPersoner - 2)){
        string += ', ';
    } else if (i === antalPersoner - 2) {
        string += " and ";
    }
  }

  if (antalPersoner === 0){
  return string + "no one likes this";
  } else if (antalPersoner > 1) {
  return string + " like this";
  } else {
      return string + " likes this";
  }
}