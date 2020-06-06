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


class VehicleFactory {
    //STATIC METHOD
  static  repair(vehicles) {
       vehicles.forEach(vehicle => {
         console.log(`Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`)
       })
     }
   }


const jhonCar = new  Car('Dr123LA','Honda',4)
const rickyCar = new Car('Dr234Ld', 'Suzuki' , 6)
//MEMANGIL CLASS DENGAN MEMBUAT INSTANCE NAMUN TIDAK EFEFTIF
// const vehicleFactory = new VehicleFactory()
// vehicleFactory.repair([jhonCar,rickyCar]);


VehicleFactory.repair([rickyCar,jhonCar])

