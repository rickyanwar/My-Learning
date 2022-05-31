export const BooksComponent = {
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
    template: `<div><h1>Daftar Buku</h1>
                <ul>
                    <li v-for="book of books">
                        <router-link :to="'book/'+book.id" >
                            {{book.title}}
                        </router-link>
                    </li>
                </ul>   
                </div>`
}

