function People(name, age, hobby){
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

const programmer  = new People("Ricky",22,["Coding","Adventure","Gaming"]);

console.log(programmer.name)
console.log(programmer.age)
console.log(programmer.hobby)

const programmer = {
    name: "John",
    age: 18,
    hobby: ["Coding", "Read book", "Ping-Pong"]
}
 
console.log(programmer.name);
console.log(programmer.age);
console.log(programmer.hobby);
 
/* output:
John
18
[ 'Coding', 'Read book', 'Ping-pong' ]
*/