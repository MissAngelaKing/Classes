class Book {
    constructor(title, author, year, borrowed = false) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.borrowed = borrowed;
    }

    borrow() {
        this.borrowed = true;
    }

    returnBook() {
        this.borrowed = false;
    }

    isBorrowed() {
        return this.borrowed;
    }

    getInfo() {
        const borrowedStatus = this.borrowed ? "Yes" : "No";
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Borrowed: ${borrowedStatus}`;
    }
}

const myBook = new Book("Romancing Mister Bridgerton", "Julia Quinn", 2002);
console.log(myBook.getInfo()); 
myBook.borrow();
console.log(myBook.isBorrowed());
console.log(myBook.getInfo()); 
myBook.returnBook()
console.log(myBook.isBorrowed()); 
console.log(myBook.getInfo());
