interface listBooksType{
    title:string,
    author:string, 
    company:string, 
    launchYear:number,
    disponibility: boolean,
    includes?:any
  }
  
  interface userType{
    name:string
  }
  
  interface loanType{
    livro: listBooksType
    user: userType
  }
  
  class Book {
    title:string
    author:string
    company:string
    launchYear:number
    disponibility:boolean
  
    constructor(title:string, author:string, company:string, launchYear:number, disponibility:boolean = true) {
      this.title = title
      this.author = author
      this.company = company
      this.launchYear = launchYear
      this.disponibility = disponibility
    }
  }
  
  class Library{
      name:string
      address:string
      phone:number
      collectionBooks:listBooksType[] = []
      loans:loanType[] = []
  
      constructor(name:string, address:string, phone:number){
        this.name = name
        this.address = address
        this.phone = phone
      }
  
      searchBook(nameBook:string){
        const result = this.collectionBooks.filter((book) => {
          if(book.title === nameBook) return book
        })
        if(result.length === 0) return `o livro ${nameBook} não existe`
        else return result
      }
  
      loanBook(loan:loanType){
        this.loans.map((object) => {
          if(object.livro === loan.livro) {
            console.log(`sinto muito ${loan.user.name}, o livro ${object.livro.title} já foi emprestado :(`)
            return
          }
        })
        const newCollection = this.collectionBooks.filter(book => {
          if(book === loan.livro) this.loans.push(loan)
          return book !== loan.livro
        })
        this.collectionBooks = newCollection
      }
  
      giveBackBook(book: listBooksType){
        const newLoans = this.loans.filter(bookLoan => {
          if(book === bookLoan.livro) this.collectionBooks.push(book)
          return bookLoan.livro !== book
        })
        this.loans = newLoans
      }
  
      addBook(book:Object){
        this.collectionBooks.push(book as listBooksType)
      } 
  }
  
  class User{
    name:string
  
    constructor(name:string){
      this.name = name
    }
  }
  
  class Costumer extends User{
    course: string
    startYear:number
    endYear:number
  
    constructor(name:string, course:string, startYear:number, endYear:number){
      super(name)
      this.course = course
      this.startYear = startYear
      this.endYear = endYear
    }
  }
  
  class Employee extends User{
    password:string | number
  
    constructor(name:string, password: string | number){
      super(name)
      this.password = password
    }
  }
  
  class Loan{
    livro:listBooksType
    user:userType
  
    constructor(livro:listBooksType, user:userType){
      this.livro = livro
      this.user = user
    }
  }
  
  const book1:listBooksType = new Book('pe de laranja lima', 'marco', 'SBB', 2021)
  
  const book2:listBooksType = new Book('ultra-aprendizado', 'joaquim', 'SSE', 2002)
  
  const book3:listBooksType = new Book('pequeno principe', 'maria', 'nathor', 1998)
  
  const methodsLibrary = new Library('SA Livros', 'Rua Aracabás', 9912345)
  methodsLibrary.addBook(book1)
  methodsLibrary.addBook(book2)
  methodsLibrary.addBook(book3)
  
  const user1:userType = new User('yure')
  const user2:userType = new User('joao')
  
  const loan1:loanType = new Loan(book1, user1)
  const loan2:loanType = new Loan(book2, user2)
  
  /* methodsLibrary.loanBook(loan1)
  methodsLibrary.loanBook(loan2)
  console.log(methodsLibrary.collectionBooks)
  console.log(methodsLibrary.loans) 
  methodsLibrary.giveBackBook(book1)
  console.log(methodsLibrary.collectionBooks)
  console.log(methodsLibrary.loans) */
  
  const bookSearched1 = methodsLibrary.searchBook('pe de laranja lima')
  console.log(bookSearched1)