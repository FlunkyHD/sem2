const events = require('events');
 
class Person extends events.EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
}
 
let james = new Person('james'); 
let mary = new Person('mary'); 
let ruy = new Person('ruy');
let people = [james, mary, ruy];

people.forEach(person => {
    person.on('speak', msg => {
        console.log(person.name + ' said : ' + msg);
    });
});

james.emit('speak', 'hey dudes');
mary.emit('speak', "Jeg er sej");