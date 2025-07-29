
// Initial object structure
const libraryCatalog = {
  books: [],  // Array to store book objects
  // Methods will be added here
};

// Sample books for testing
libraryCatalog.books.push({
  title: "1984",
  author: "George Orwell",
  genres: ["Dystopian", "Fiction"],
  details: { pages: 328, year: 1949 }
});

libraryCatalog.books.push({
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  genres: ["Fantasy", "Adventure"],
  details: { pages: 310, year: 1937 }
});

// Instructions/Tasks:
// Build a Library Catalog System to manage books. Each book is an object with title (string), author (string), genres (array of strings), and details (object with pages and year).
// Implement the following methods:

// 1. addBook(title, author, genres, pages, year)
//    - Takes title (string), author (string), genres (array), pages (number), and year (number).
//    - Validates: title and author are non-empty strings, genres is an array.
//    - Creates a book object with nested details and adds it to books array.
//    - Logs confirmation (e.g., "Added 'Dune' to the library catalog.").
//    - Test: libraryCatalog.addBook("Dune", "Frank Herbert", ["Science Fiction", "Adventure"], 412, 1965);

// 2. findByGenre(genre)
//    - Takes a genre (string) and returns an array of book titles matching it (case-insensitive).
//    - Use 'filter' on books and 'some' on genres array.
//    - Use string methods 'toLowerCase' and 'includes' for matching.
//    - Test: console.log(libraryCatalog.findByGenre("fiction")); // Should return ["1984", "Dune"]

// 3. summarizeBooks()
//    - Loops through all books (outer loop) and their genres (inner loop).
//    - Formats author name (e.g., "george orwell" -> "George Orwell") using 'split', 'map', 'charAt', 'toUpperCase', 'slice', 'join'.
//    - Logs a summary per book (e.g., "Book 1: 1984\nAuthor: George Orwell\nGenres: Dystopian, Fiction\n...").
//    - Use 'forEach' for books and a 'for' loop for genres.
//    - Test: libraryCatalog.summarizeBooks();

// 4. getShortCatalog()
//    - Returns a single string summarizing all books (e.g., "1984 by George Orwell (1949), The Hobbit by J.R.R. Tolkien (1937), ...").
//    - Use 'map' to format each book and 'reduce' to combine with commas.
//    - Test: console.log(libraryCatalog.getShortCatalog());

// Challenge Extension:
// - Add a method filterByPageCount(minPages, maxPages) that filters books by page count and returns a formatted string (e.g., "2 books found with pages between 300 and 400: [titles]").
// - Test: console.log(libraryCatalog.filterByPageCount(300, 400));

// Run tests in a browser console, Node.js, or JSFiddle to verify functionality.