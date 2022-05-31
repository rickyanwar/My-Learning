class imageFigure extends HTMLElement {
    constructor() {
        super();
        console.log('constructed');
    }

    connectedCallback() {
        console.log('connected')
        this.src = this.getAttribute('src') || null;
        this.alt = this.getAttribute('alt') || null;
        this.caption = this.getAttribute('caption') || null
        this.render();

    }
    render() {
        this.innerHTML = `
        <style>
        figure {
          border: thin #c0c0c0 solid;
          display: flex;
          flex-flow: column;
          padding: 5px;
          max-width: 220px;
          margin: auto;
        }
 
        figure > img {
          max-width: 220px;
        }
 
        figure > figcaption {
          background-color: #222;
          color: #fff;
          font: italic smaller sans-serif;
          padding: 3px;
          text-align: center;
        }
      </style>
 

        <figure>
        <img src="${this.src}" alt="${this.alt}">
        <figcaption>${this.caption}</figcaption>
        </figure>
    `
    }



    disconnectedCallback() {
        console.log('Disconnect');
    }

    adoptedCallback() {
        console.log('Adopted');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this[alt] = newValue;
        this.render()
        console.log(`Attribut: ${name} changed !`)
    }
    // digunakan untuk mengamati perubahan nilai attribute caption
    /* kita bisa menetapkan lebih dari satu atribut yang diamati.
       dengan memisahkan nama atribut menggunakan koma. Contoh: */
    // return ["caption", "title", "src", ...]
    //fungsi getter statis ini berperan sebagai “seseorang”
    // yang mengamati perubahan nilai pada atribut yang ditentukan.
    // Jika terjadi perubahan, ia akan memanggil attributeChangedCallback
    // dengan memberitahu nama atribut apa yang berubah, nilai sebelum perubahan, serta nilai baru yang akan ditetapkan
    static get observedAttributes() {
        return ['caption'];
    }
}

customElements.define('image-figure', imageFigure);