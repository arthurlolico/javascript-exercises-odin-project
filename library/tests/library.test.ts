import { test , expect } from "bun:test";
import Book from "../src/book";
import Library from "../src/library"

const library = new Library();

test("Library class creates correct properties", () => {

    expect(library instanceof Library).toBe(true);
    expect(library.books.length).toBe(0);
})

test("Book is added to library", () => {
    expect(library.addBook("The Hobbit","J.R.R. Tolkien",310)).toBe("The Hobbit");
})

test("Attempt to remove a book that doesn't exist in the library", () => {
    expect(library.removeBook("The Roberto")).toBe(-1);
})

test("Book is removed from library", () => {
    library.addBook("The Hobbit","J.R.R. Tolkien",310);
    expect(library.removeBook("The Hobbit")).toBe(0);
})



