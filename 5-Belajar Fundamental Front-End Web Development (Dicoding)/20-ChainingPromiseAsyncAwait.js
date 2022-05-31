
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

//CHAINING PROMISE USING ASYNC AWAIT

async function reserveACoffe(type, miligrams){
    try {
        const seeds = await getSeeds(type, miligrams);
        const coffe = await makeCofee(seeds);
        const result = await servingToTable(coffe)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}


reserveACoffe("liberica", 10)