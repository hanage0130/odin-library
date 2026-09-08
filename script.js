const myLibrary = [];

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

Book.prototype.changeReadState = function() {
  if (this.read) {
    this.read = false;
  } else {
    this.read = true;
  }
};

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read, crypto.randomUUID()));
}

console.log(myLibrary);

function displayData() {
  let display = document.querySelector(".display");
  display.innerHTML = "<tr><th>Title</th><th>Author</th><th>Pages</th><th>Read</th><th>ID</th><th>Delete</th><th>Change read state</tr>";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    display.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td><td>${book.read}</td><td>${book.id}</td><td><button id="a${book.id}">delete</button></td><td><button id="b${book.id}">change read state</button></td></tr>`;
  }
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let deleteButton = document.querySelector("#a" + book.id);
    deleteButton.addEventListener("click", () => {
      for (let j = 0; j < myLibrary.length; j++) {
        if (myLibrary[j].id === book.id) {
          myLibrary.splice(j, 1);
        }
      }
      displayData();
    });
    let changeReadStateButton = document.querySelector("#b" + book.id);
    changeReadStateButton.addEventListener("click", () => {
      book.changeReadState();
      displayData();
    });
  }
}

let submitButton = document.querySelector(".submit-button");

submitButton.addEventListener("click", (e) => {
  let inputTitle = document.querySelector(".input-title");
  let inputAuthor = document.querySelector(".input-author");
  let inputPages = document.querySelector(".input-pages");
  let inputRead = document.querySelector(".input-read");
  addBookToLibrary(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.checked);
  displayData();
  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
  inputRead.checked = false;
  e.preventDefault();
});

let newBookButton = document.querySelector(".new-book-button");
newBookButton.addEventListener("click", () => {
  let newBookForm = document.querySelector(".new-book-form");
  if (newBookForm.style.display === "none") {
    newBookForm.style.display = "block";
  } else {
    newBookForm.style.display = "none";
  }
});

displayData();