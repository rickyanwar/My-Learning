
const methodMahasiswa = {
   makan : function (porsi) {

        this.energi += porsi;
        console.log(`selamat makan ${this.nama} energi sekarang ${this.energi}`);

      },

    tidur : function (jam) {
        this.energi *= jam;
        console.log(`selamat tidur ${this.nama} energi sekarang ${this.energi}`) 
    }

}


function mahasiswa (nama ,energi) {

    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
   

    
    return mahasiswa;
}

let sandika = mahasiswa('adwada',3)