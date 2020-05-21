

//Ambil Element video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

//seleksi js lanjut
let jslanjut =  videos.filter(video => video.textContent.includes("JAVASCRIPT LANJUT")) 


//ambil durasi masing masing video

.map(item => item.dataset.duration )
//ubah waktu jadi int, ubah menit jadi detik

.map(waktu => {
     const parts = waktu.split(':').map(part=> parseFloat(part))

   return (parts[0] * 60)+ parts [1]
})
//jumlahkan semua detik
.reduce((total, detik) => total +detik)
 

console.log(jslanjut)
//ubah format jam jadi detik menit
const jam = Math.floor(jslanjut/3600);
jslanjut = jslanjut - jam * 3600;
const menit = Math.floor(jslanjut /60 )
const detik = jslanjut - menit*60;

const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam , ${menit} Menit, ${detik} Detik`
//simpan di dom

const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `Jumlah Video ${jmlVideo }`
console.log(detik)
