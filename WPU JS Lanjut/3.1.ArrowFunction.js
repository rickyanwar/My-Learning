//Constructor Function

// const Mahasiswa = function (){
//     this.nama = 'ricky';
//     this.umur = 33;
//     this.sayHello = function(){
//         console.log(`hai ${this.nama} umur kamu ${this.umur}`)
//     }
// }

// const ricky = new Mahasiswa;

//==============Di RUbah Menjadi Arrow Function===========


// const Mahasiswa = function (){
//     this.nama = 'ricky';
//     this.umur = 33;
//     this.sayHello = ()=>{
//         console.log(`hai ${this.nama} umur kamu ${this.umur}`)
//     }
// }

//==============Di Rubah menjadi object Literal===========

const mahasiswa = {
    nama : 'sandika',
    umur : 22,
    sayhello : ()=> {
        console.log(`hallo ${this.nama}, dan saya umur ${this.umur} tahun`)
    }
}