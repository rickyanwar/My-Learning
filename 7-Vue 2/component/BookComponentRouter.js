export const BookComponent = {
    data() {
        return {
            books: [{
                id: 99,
                title: 'C++ High Performance',
                description: 'Write code that scales across CPU registers',
                authors: 'Viktor Sehr, Björn Andrist',
                publish_year: 2018,
                price: 100000,
                image: 'https://picsum.photos/id/237/200/300'
            },
            {
                id: 100,
                title: 'Mastering Linux Security and Hardening',
                description: 'A comprehensive guide to mastering the art of',
                authors: 'Donald A. Tevault',
                publish_year: 2018,
                price: 125000,
                image: 'https://picsum.photos/id/238/200/300'
            },
            {
                id: 101,
                title: 'Mastering PostgreSQL 10',
                description: 'Master the capabilities of PostgreSQL 10 to',
                authors: 'Hans-Jürgen Schönig',
                publish_year: 2016,
                price: 90000,
                image: 'https://picsum.photos/id/239/200/300'
            },
        ],
            classCard : 'card'
        }
    },
    computed : {
        book(){
            // return this.books.filter((book)=>{
            //     return book.id === parseInt(this.$route.params.id)
            // })[0]

            //PROGRAMTIC NAVIGATION
            let book = this.books.filter((book)=>{
                return book.id === parseInt(this.$route.params.id)
            })
            if (book.length ===0) {
                //REDIRECT KE PATH BOOK
                alert ("Buku tidak ditemukan")
                this.$router.push("/books")
            } else {
                return book[0]
            }

            
          
        }
    },
    template: `<div >
    <h1>Buku {{ book.title }}</h1>
    <ul>
    <li v-for="(num, value) of book">
    {{ num +' : '+ value }} <br>
    </li>
    </ul>
    </div>`,
    //NAVIGATION GUARDS
    beforeRouteLeave (to, from, next) {
        const answer = window.confirm('Apakah anda ingin keluar')
        if(answer){
            next()
        }else{
            next(false)
        }
    }
}

