let library = []
const bookShelf = document.getElementById('gridContainer')
const form = document.getElementById('bookForm');

function Book (title, author, pages, colour, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.colour = colour;
  this.isRead = isRead;
};

function addBook (e) {
  const newEntry = document.createElement('div')
  newEntry.style.background = e.colour
  newEntry.classList.add('books')

  const newTitle = document.createElement('h1')
  newTitle.textContent = e.title
  newTitle.classList.add('titles')
  newEntry.appendChild(newTitle)

  const newAuthor = document.createElement('h2')
  newAuthor.textContent = e.author
  newAuthor.classList.add('authors')
  newEntry.appendChild(newAuthor)

  const newPages = document.createElement('div')
  newPages.textContent = e.pages + ' pages'
  newPages.classList.add('pages')
  newEntry.appendChild(newPages)

  const newRead = document.createElement('div')
  newRead.textContent = e.isRead
  newRead.classList.add('isReads')
  newEntry.appendChild(newRead)

  library.push(newEntry)
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let nt = form.elements['title']
  let na = form.elements['author']
  let np = form.elements['pages']
  let nc = form.elements['colour']
  let nr = form.elements['isRead']
  let newBook = new Book(nt.value, na.value, np.value, nc.value, nr.value);
  addBook(newBook);
  library.forEach((book) => {
    bookShelf.appendChild(book)
  });
});
