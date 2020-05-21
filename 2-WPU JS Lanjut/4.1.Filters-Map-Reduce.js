const angka = [-1, 8, 9,1,4,-5,-4,3,2,9];

//Mencari Angka yang lebih besar 3

// const NewAngka = [];
// for (let index = 0; index < angka.length; index++) {
//     if(angka[index] >= 3){
//         NewAngka.push(angka[index]);

//     }
   
// }
// console.log(NewAngka);


// <=====Menggunakan Filters======>
// const NewAngka = angka.filter ( (a)=> a >=3 )

// console.log(NewAngka)



// <=====Menggunakan Maps======>

// const NewAngka = angka.map ( (a)=> a +2);
// console.log(NewAngka)


// [-1,+ 8,+ 9,+1 +,4,+-5,+-4,+3,+2+,9]
// <=====Menggunakan Reduce======>
// const NewAngka = angka.reduce((accumulator,currenValue) =>
//  accumulator+ currenValue 
// );

// console.log(NewAngka);

// <=====Menggunakan Chining======>
// Cari Angka >5
// Kalikan 3
// Jumlahkan

const hasil = angka.filter( (a) => a >5)
    .map((a)=> a * 3 )
    .reduce((x,i)=> x+i);

    console.log(hasil)