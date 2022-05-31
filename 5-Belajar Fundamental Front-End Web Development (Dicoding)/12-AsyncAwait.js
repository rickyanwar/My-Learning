const getCofee = () => {
    return new Promise((resolve, reject)=>{
        const seeds = 100;
        setTimeout(()=>{
            if (seeds >= 10){
                resolve('Biji Cofee di dapatkan')
            }else{
                reject('Biji Cofee habis')
            }
        },1000)
    })
}
//CARA BIASA DALAM PENGGUNAN PROMISE

// function makeCoffe(){
//     getCofee().then(
//         coffe =>{
//             console.log(coffe)
//         }
//     )
// }

//MENGGUNAKAN ASYNC AWAIT
async function makeCoffe(){
    const cofee = await getCofee();
    console.log(cofee)
}


makeCoffe()

