let nama = document.querySelector('.name');
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join('')
nama.innerHTML = huruf
console.log(huruf)
