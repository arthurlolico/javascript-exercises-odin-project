import { test, expect } from "bun:test";
import Book from "../src/book";

test("Book class creates correct properties", () => {
    const book = new Book("The Hobbit","J.R.R. Tolkien",310);
    expect(book.id).toBeDefined();
    expect(book.title).toBe("The Hobbit");
    expect(book.author).toBe("J.R.R. Tolkien");
    expect(book.numberPages).toBe(310);
    expect(book.read).toBe(false);
})