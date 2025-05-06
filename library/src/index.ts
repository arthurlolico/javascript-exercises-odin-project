const myLibrary = [];

const newBookButton = document.querySelector(".newBookButton");
const libraryButton = document.getElementById("libraryButton");
const newBookDialog = document.getElementById("newBookDialog");
const newBookForm = document.getElementById("newBookForm");

function Book(id,title,author,numberPages) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
    this.read = 0;
}

function addBookToLibrary(infoBook) {

    const id = crypto.randomUUID();
    const title = infoBook.get("name");
    const author = infoBook.get("author");
    const numberPages = infoBook.get("numberPages");
    const newBook = new Book(id,title,author,numberPages);
    myLibrary.push(newBook);
}


libraryButton.addEventListener("click", function() {
    if(!myLibrary.length)
        console.log("Não há livros na biblioteca");
    else {
        for(let i = 0 ; i < myLibrary.length ; i++) {
            console.log(myLibrary[i]);
        }
    }
})

newBookButton.addEventListener("click", function() {
    newBookDialog.showModal();
})

newBookForm.addEventListener("submit",function(e) {
    e.preventDefault();
    const infoBook = new FormData(newBookForm);
    addBookToLibrary(infoBook);
    newBookDialog.close();
})

