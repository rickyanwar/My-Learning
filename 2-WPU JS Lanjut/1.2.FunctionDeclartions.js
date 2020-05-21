    //Function Declation

    function Mahasiswa(nama, energi) {
        let mahasiswa = {}
        mahasiswa.nama = nama;
        mahasiswa.energi = energi;

        mahasiswa.makan = function(porsi){
            this.energi += porsi;
            console.log(`hallo ${this.nama}, Selamat Makan energi Sekarang ${this.energi}` );
        }

        mahasiswa.main = function(jam){
            this.energi -= jam;
            console.log(`Halo ${this.nama},Selamat Bermain ${this.energi}`);
        }
        return mahasiswa;
    }

    let sandhika = Mahasiswa('coba' ,2);