    //Constructor function

    function Mahasiswa(nama, energi) {
        let mahasiswa = {}
        this.nama = nama;
        this.energi = energi;

        this.makan = function(porsi){
            this.energi += porsi;
            console.log(`hallo ${this.nama}, Selamat Makan energi Sekarang ${this.energi}` );
        }

        this.main = function(jam){
            this.energi -= jam;
            console.log(`Halo ${this.nama},Selamat Bermain ${this.energi}`);
        }

    }

    let sandhika = new Mahasiswa('coba' ,2);