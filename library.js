/* jshint esversion: 6 */

const container = document.querySelector(`#container`);
let myLibrary = [];

function Book(title, author, pages, read){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function(){
		console.log(title);
	};
}

function addBookToLibrary(book){
	myLibrary.push(book);

	const libBook = document.createElement(`div`);

	let bookTitle = document.createElement("p");
	let bookAuthor = document.createElement("p");
	let bookPages = document.createElement("p");
	let bookRead = document.createElement("p");
	

	libBook.textContent = "TESTING";
	bookTitle.textContent = testBook.title;
	bookAuthor.textContent = testBook.author;
	bookPages.textContent = testBook.pages;
	bookRead.textContent = testBook.read;

	libBook.appendChild(bookTitle);
	libBook.appendChild(bookAuthor);
	libBook.appendChild(bookPages);
	libBook.appendChild(bookRead);

	container.appendChild(libBook);
}

let testBook = new Book("TITLE", "AUTHOR", "150", "READ");
addBookToLibrary(testBook);




//let testVal = 6;


// for(let i = 0; i < myLibrary.length; i++){
//         libBook.appendChild(document.createElement('p'));
//
//         container.appendChild(libBook);
// }
