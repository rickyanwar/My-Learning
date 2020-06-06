//REGULAR FUNCTION
const Hello = function sayHello(name="stranger",age=12){
    console.log(`Nama ${name} umur ${age}` )
}


Hello('ricky',13)
Hello()

//ARROW FUNCRION

const sayHello = (name = 'Fuji', age = 22) => {
    console.log(`Nama ${name} Umur ${age}`)
}
sayHello()
sayHello('Ricky',11)