var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function () {
    function Book(title, author, company, launchYear, disponibility) {
        if (disponibility === void 0) { disponibility = true; }
        this.title = title;
        this.author = author;
        this.company = company;
        this.launchYear = launchYear;
        this.disponibility = disponibility;
    }
    return Book;
}());
var Library = /** @class */ (function () {
    function Library(name, address, phone) {
        this.collectionBooks = [];
        this.loans = [];
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    Library.prototype.searchBook = function (nameBook) {
        var result = this.collectionBooks.filter(function (book) {
            if (book.title === nameBook)
                return book;
        });
        if (result.length === 0)
            return "o livro ".concat(nameBook, " n\u00E3o existe");
        else
            return result;
    };
    Library.prototype.loanBook = function (loan) {
        var _this = this;
        this.loans.map(function (object) {
            if (object.livro === loan.livro) {
                console.log("sinto muito ".concat(loan.user.name, ", o livro ").concat(object.livro.title, " j\u00E1 foi emprestado :("));
                return;
            }
        });
        var newCollection = this.collectionBooks.filter(function (book) {
            if (book === loan.livro)
                _this.loans.push(loan);
            return book !== loan.livro;
        });
        this.collectionBooks = newCollection;
    };
    Library.prototype.giveBackBook = function (book) {
        var _this = this;
        var newLoans = this.loans.filter(function (bookLoan) {
            if (book === bookLoan.livro)
                _this.collectionBooks.push(book);
            return bookLoan.livro !== book;
        });
        this.loans = newLoans;
    };
    Library.prototype.addBook = function (book) {
        this.collectionBooks.push(book);
    };
    return Library;
}());
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var Costumer = /** @class */ (function (_super) {
    __extends(Costumer, _super);
    function Costumer(name, course, startYear, endYear) {
        var _this = _super.call(this, name) || this;
        _this.course = course;
        _this.startYear = startYear;
        _this.endYear = endYear;
        return _this;
    }
    return Costumer;
}(User));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, password) {
        var _this = _super.call(this, name) || this;
        _this.password = password;
        return _this;
    }
    return Employee;
}(User));
var Loan = /** @class */ (function () {
    function Loan(livro, user) {
        this.livro = livro;
        this.user = user;
    }
    return Loan;
}());
var book1 = new Book('pe de laranja lima', 'marco', 'SBB', 2021);
var book2 = new Book('ultra-aprendizado', 'joaquim', 'SSE', 2002);
var book3 = new Book('pequeno principe', 'maria', 'nathor', 1998);
var methodsLibrary = new Library('SA Livros', 'Rua Aracabás', 9912345);
methodsLibrary.addBook(book1);
methodsLibrary.addBook(book2);
methodsLibrary.addBook(book3);
var user1 = new User('yure');
var user2 = new User('joao');
var loan1 = new Loan(book1, user1);
var loan2 = new Loan(book2, user2);
/* methodsLibrary.loanBook(loan1)
methodsLibrary.loanBook(loan2)
console.log(methodsLibrary.collectionBooks)
console.log(methodsLibrary.loans)
methodsLibrary.giveBackBook(book1)
console.log(methodsLibrary.collectionBooks)
console.log(methodsLibrary.loans) */
var bookSearched1 = methodsLibrary.searchBook('pe de laranja lima');
console.log(bookSearched1);
