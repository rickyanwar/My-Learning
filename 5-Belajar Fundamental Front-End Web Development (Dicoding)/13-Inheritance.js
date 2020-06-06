class Vehicle {
    constructor(licensePlate, manufacture){
        this.licensePlate = licensePlate
        this.manufacture = manufacture
        this.engineActive = false
    }

    starEngine(){
        console.log(`Mesin Kendaraan ${this.licensePlate} di nyalakan`)
    }

    info(){
        console.log(`Nomor kendaraan: ${this.licensePlate}`);
        console.log(`Manufacture : ${this.manufacture}`)
        console.log(`Mesin : ${this.engineActive} ? "Active" : "Inactive"`)
    }

    parking(){
        console.log(`Kendaraan ${this.licensePlate} Parkit`)
    }
}

class Car extends Vehicle {
    constructor(licensePlate, manufacture, wheels){
        //SUPER DI GUNAKAN UNTUK MENGAKSES PEROPERTY DAN METHOD YANG ADA PADA INDUK CLASS
        super(licensePlate, manufacture)
        this.wheels = wheels
    }

    droveOff(){
        console.log(`Kendaraan ${this.licensePlate} melaju !`)
    }

    openDoor(){
        console.log(`Membuka Pintu`)
    }
     /* overriding method info dari parent class */
     info(){
         super.info();
         console.log(`Jumlah roda : ${this.wheels}`)
     }
}

const car = new Car('DR123LA', "HONDA" , 4)
car.starEngine();
car.parking()
car.openDoor()
car.info()