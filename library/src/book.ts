class Book {

    id: string;
    title: string;
    author: string;
    numberPages: number;
    read: boolean = false;

    constructor(
        title: string,
        author: string,
        numberPages: number
    ){
        this.title = title;
        this.author = author;
        this.numberPages = numberPages;
        this.id = crypto.randomUUID();
    }

    isRead = () => {
        return this.isRead;
    }
}

export default Book;