let library = [];

function Book (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
};

function addBook () {

};


// function createBookshelf(size) {
//     grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
//     grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

//     for (let i=0; i<size*size; i++) {
//         const gridElement = document.createElement('div')
//         gridElement.classList.add("grid-element")
//         gridElement.addEventListener('mouseover', changeColour)
//         gridElement.addEventListener('mousedown', changeColour)
//         grid.appendChild(gridElement)
//     }
// }
