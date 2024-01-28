// Book class to represent a book
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  // Method to toggle the read status of the book
  toggleReadStatus() {
    this.isRead = !this.isRead;
  }
}

// Library class to manage a collection of books
class Library {
  constructor() {
    this.books = [];
  }

  // Method to add a new book to the library
  addBook(book) {
    this.books.push(book);
  }

  // Method to display the books in the library
  displayBooks() {
    const libraryContainer = document.getElementById("library-container");
    libraryContainer.innerHTML = "";

    this.books.forEach((book) => {
      const bookDetails = document.createElement("div");
      bookDetails.classList.add("book-details");
      bookDetails.innerHTML = `<strong>${book.title}</strong> by ${
        book.author
      }, ${book.pages} pages, ${book.isRead ? "Read" : "Not Read"}`;
      libraryContainer.appendChild(bookDetails);
    });
  }
}

// Function to add a new book to the library and update the display
function addBook() {
  const title = prompt("Enter the title of the book:");
  const author = prompt("Enter the author of the book:");
  const pages = parseInt(prompt("Enter the number of pages:"));
  const isRead = confirm("Have you read this book?");

  const newBook = new Book(title, author, pages, isRead);
  library.addBook(newBook);
  library.displayBooks();
}

// Initialize the library
const library = new Library();
