//PROMISE MERUPAKAN SEBUAH OBJECT
//PROMISE MEMERLKUKAN RESOLVER FUNCTION ATAU BISA DI SBUT EXECUTOR FUNCTION

//EXECUTOR FUNCTION DAPAT MEMILIKI DUA PRAMETER BERFUNGSI SEBAGAI RESOLVE() DAN REJECT()
//RESOLVE MERUPAKAN PARAMETER PERTAMA PADA EXECUTOR FUNCTION , PARAMETER INI MERUPAKAN HANYA DAPAT MENERIMA 1 PARAMETER , BISANYA KITA GUNAKAN
//UNTUK MENGIRIM DATA KETIKA PROMISE BERHASIL DI LAKUKAN. PROMISE AKAN BERUBAH DARI PENDING MENJADI FULLPILED
const executorFunction = ( resolve , reject ) => {
    const isCoffeMakerReady = false;

    if(isCoffeMakerReady){
        resolve("Kopi Berhasil di buat")
    }else{ 
        reject("Mesin Kopi tidak bisa di gunakan")
    }
}
//ON FULLFILEDD AND REJECTED FUNCTIONS
const handlerSucces = resolvedValue => {
    console.log(resolvedValue)
}

const handlerRejected = rejectionReason => {
    console.log('catch')
    console.log(rejectionReason)
}

const makeCofee = new Promise(executorFunction)
makeCofee.then(handlerSucces)
.catch(handlerRejected)


