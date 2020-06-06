const getCake = callback => {
    let cake = null
    console.log("Sedang Membuat kue silahkan menunggu")

    setTimeout(()=>{
        cake = "Kue Selesai di buat"
        callback(cake)
    },2000)
}


getCake( cake => {
    console.log(cake)
    
})

