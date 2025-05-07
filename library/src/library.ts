import Book from "./Book";

class Library {

    books: Book[]
    
    constructor(){
        this.books = [];
    }

    newBook = (title: string,author: string,numberPages: number) => {
        let b = new Book(title,author,numberPages);
    }



}