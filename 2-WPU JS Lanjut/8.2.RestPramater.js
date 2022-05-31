function jumlahkan(...angka){
    let total = 0 ;
    // for (const iterator of [...angka]) {
    //     total += iterator;
    // }
    // return total

    return angka.reduce((a, b) => a + b)
}

console.log(jumlahkan(1, 2, 3, 4, 6))