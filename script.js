let books = []

class Book {
    title
    author
    company
    launchYear
    disponibility
}

class Library{
    name
    address
    phone

    searchBook(nameBook){
        books.filter(book => {
            if(book.title === nameBook) return book
        })
    }

    loanBook(nameBook){
        books.filter(book => {
            if(book.title === nameBook && book.disponibility === true){
                book.disponibility = false
                return true
            } else return false
        })
    }

    giveBackBook(nameBook){
        books.filter(book =>{
            if(book.title === nameBook) book.disponibility = true
        })
    }
}

let book1 = new Book()
book1.title = 'pe de laranja lima'
book1.author = 'marco'
book1.company = 'SBB'
book1.launchYear = 2021
book1.disponibility = true

let book2 = new Book()
book2.title = 'ultra-aprendizado'
book2.author = 'joaquim'
book2.company = 'SSE'
book2.launchYear = 2002
book2.disponibility = false

let book3 = new Book()
book3.title = 'pequeno principe'
book3.author = 'maria'
book3.company = 'nathor'
book3.launchYear = 1998
book3.disponibility = true

books.push(book1, book2, book3)

let methodsLibrary = new Library()
methodsLibrary.searchBook(book1.title)
methodsLibrary.loanBook(book3.title)
methodsLibrary.giveBackBook(book3.title)