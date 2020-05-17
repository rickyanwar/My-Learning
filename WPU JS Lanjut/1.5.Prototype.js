function mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return `Hallo ${this.nama} energi sekarang = ${this.energi}`;
}

mahasiswa.prototype.main = function (jam) {
    this.energi -= jam;
    return `hallo ${this.nama} energi sekarang = ${this.energi}`;
}

mahasiswa.prototype.tidur = function (jam) {
    this.energi *= jam;
    return `hallo ${this.nama} energi setelah tidur = ${this.energi}`;
}

sandhika = new mahasiswa('sandika', 10);


// Menggunakan Class

class Mahasiswax {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Hallo ${this.nama} energi sekarang = ${this.energi}`;
    }

    main(jam) {
        this.energi -= jam;
        return `hallo ${this.nama} energi sekarang = ${this.energi}`;
    }

    tidur(jam) {
        this.energi *= jam;
        return `hallo ${this.nama} energi setelah tidur = ${this.energi}`;
    }
}

let ricky = new Mahasiswax('ricky', 23);