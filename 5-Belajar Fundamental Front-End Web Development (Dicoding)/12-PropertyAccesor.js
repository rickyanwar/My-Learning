//DAPAT MENGUBAH NILAI PROPERTY SETTER DAN GETTER
//JIKA MENGGUNAKAN PROPERTY ACCESOR BERDASARKAN KODE CONVENTION YANG ADA MAKA SEBAIKNYA PROPERTY DI BERIKAN UNDERSCORE 
//BAHWA PROPERTY TERSEBUT TIDAK SEBAIKNYA DI AKSES LANGSUNG NAMUN HARUS MELALUI PROPERTY ACCESSOR
class Car{
    constructor(manufacture, color){
        this.manufacture = manufacture;
        this._color = color
    }

    get color(){
        return `Warna Mobil ${this._color}`
    }

    set color(value){
        console.log(`Warna mobil berubah dari ${this._color} menjadi ${value}`)
        this._color = value
    }
}

const jhonCar = new Car("Honda", "Red")
console.log(jhonCar.color)
console.log(jhonCar.color="white")
