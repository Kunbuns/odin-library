console.log("Hello")

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

function render() {
    let libraryElement = document.getElementById("library");
    libraryElement.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookElement = document.createElement("div");
        bookElement.innerHTML = `
            <div class="book-card">
                <h1>Title: ${book.title}</h1>
                <h2>Author: ${book.author}</h2>
                <h3>Pages: ${book.pages}</h3>
                <h4 class="read-status">${book.read ? "Read" : "Not Read Yet"}</h4>
                <button class="remove-button" onclick="removeBook(${i})">Remove Book</button>
            </div>`;
        libraryElement.appendChild(bookElement);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    let newBook = new Book(title, author, pages, read);

    let newLibrary = document.getElementById("library");
    newLibrary.style.display = "flex";

    myLibrary.push(newBook);
    render();
}

let newBookButton = document.querySelector("#new-book-button")

newBookButton.addEventListener("click", function() {
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "flex";
})

document.querySelector("#new-book-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
})