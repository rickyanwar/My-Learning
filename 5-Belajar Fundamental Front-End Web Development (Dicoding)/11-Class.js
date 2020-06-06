//BEFORE ES6

// function Car(manufacture, color){
//     this.manufacture =  manufacture,
//     this.color = color,
//     this.engineActive = false
// }

// Car.prototype.startEngine = function(){
//     console.log('Mobil Di Nyalakan')
// }

// Car.prototype.info = function(){
//     console.log('Manufacture ' + this.manufacture);
//     console.log('Warna ' + this.color);
//     console.log('Engines ' + this.engineActive ? "Active" : "Inactive")
// }

// var JhonCar = new Car("Honda","Red");
// JhonCar.startEngine()
// JhonCar.info()

// ES6 CLASS

class Car {
    constructor(manufacture, color){
        this.manufacture = manufacture ;
        this.color =color;
        this.engineActive = false
    }
    startEngine(){
        console.log("Mobil Di Nyalakan")
        this.engineActive = true
    }
    info(){
        console.log('Manufacture ' + this.manufacture)
        console.log('Color '+ this.color)
        console.log(this.engineActive ? 'Active' : 'False')
    }
}
//INSTANCE merupkan object yang memiliki properti dan method yang telah di tentukan blueprintnya (KEYWORD NEW)
rickyCar = new Car("Jeep","Black")
rickyCar.startEngine()
rickyCar.info()
