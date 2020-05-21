// function init(){
//     // let nama = "ricky";
//     function tampilNama(nama){
//         console.log(nama);
//     }
//     return tampilNama;
// }

// let panggilNama = init();
// panggilNama("xxxx")


//===============di singkat menjadi==========

// function init(){
//     return function (nama){
//         console.log(nama);
//     }
// }

// let panggilNama = init()

// panggilNama("ricky");
// panggilNama("jihad");
// panggilNama("arian");


// ================contoh reafactory fuction

// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`selamat ${waktu} , semoga harimu meyenangkan ${nama}`)
//     }
// }


// let selamatPagi = ucapkanSalam("pagi");
// let selamatSiang = ucapkanSalam("siang");
// let selamatMalam = ucapkanSalam("malam");

// selamatMalam("ricky");


// Reafactory function increment

let add = (function(){
    let counter = 0;
    return function(){
       return ++counter;
    }
})();

counter = 34;


console.log(add())
console.log(add())
console.log(add())