
const state = {
    isCoffeMakerReady : false,
    seedStock : {
        arabica : 250,
        robusta : 60,
        liberica : 80
    }
}

//MENDAPATKAN BIJI COFEE
const getSeeds = (type , miligrams)=>{
    return new Promise((resolve, reject) => {
        if(state.seedStock[type] >= miligrams){
            state.seedStock[type] -= miligrams;
            resolve("Biji Kopi di dapatkan")
        }else{
            reject("Maaf biji kopi habis")
        }
    });
}

const makeCofee = seeds =>{
    return new Promise((resolve, reject) => {
        if(state.isCoffeMakerReady){
            resolve("Kopi Berhasil di buat")
        }else{
            reject("Maaf mesin tidak dapat di gunakan")
        }
    })
}
const servingToTable = coffe =>{
    return new Promise(resolve => {
        resolve("Pesanan Kopi sudah selesai")
    })
}

function reserveACoffe(type, miligrams){
    getSeeds(type , miligrams)
    .then(makeCofee)
    .then(servingToTable)
    .then(resolvedValue => {
        console.log(resolvedValue)
    })
    .catch(rejectedReason =>{
        console.log(rejectedReason)
    })
}


reserveACoffe("liberica", 200)