const myLibrary = [];

function Book(author, title, pages, read, id) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(author, title, pages, read) {
    const id = crypto.randomUUID();
    const book = new Book(author, title, pages, read, id);
    myLibrary.push(book);
    console.log(book, myLibrary);
    const lib = document.getElementById('library');
    lib.insertAdjacentHTML('beforeend', `<tbody><tr><th>${author}</th><th>${title}</th><th>${pages}</th><th>${read}</th><th>${id}</th></tr></tbody>`)

}

document.getElementById('btn').addEventListener('click', function() {
    let author = document.getElementById('author').value;
    let title = document.getElementById('title').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    console.log(author, title, pages, read);
    addBookToLibrary(author, title, pages, read);
});