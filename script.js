let library = []
const bookShelf = document.getElementById('gridContainer')
const form = document.getElementById('bookForm');

function Book (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = read;
};

function addBook (e) {
  const newEntry = document.createElement('div')
  newEntry.classList.add('books')

  const newTitle = document.createElement('h1')
  newTitle.textContent = e.title
  newTitle.classList.add('titles')
  newEntry.appendChild(newTitle)

  const newAuthor = document.createElement('h2')
  newAuthor.textContent = e.author
  newAuthor.classList.add('authors')
  newEntry.appendChild(newAuthor)

  const newPages = document.createElement('p')
  newPages.textContent = e.pages
  newPages.classList.add('pages')
  newEntry.appendChild(newPages)

  const newRead = document.createElement('div')
  newRead.textContent = e.isRead
  newRead.classList.add('isReads')
  newEntry.appendChild(newRead)

  library.push(newEntry)
  bookShelf.appendChild(newEntry)
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let nt = form.elements['title']
  let na = form.elements['author']
  let np = form.elements['pages']
  let nr = form.elements['isRead']
  let newBook = Book(nt.value, na.value, np.value, nr.value);
  console.log(nt.value)
  console.log(na.value)
  console.log(np.value)
  console.log(nr.value)
  addBook(newBook);
  // library.forEach((book) => {
    // bookShelf.appendChild(book)
  console.log(library)
  // });
});
