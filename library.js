/* jshint esversion: 6 */

const container = document.querySelector(`#container`);
let myLibrary = [];
let idx = 0;

function Book(title, author, pages, read){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function(){
	console.log(title);
	}; 
}   
   
   
  
function removeBook(book){
//TODO: also remove entry in array
} 

function addBookToLibrary(book){
	myLibrary.push(book);

	let libBook = document.createElement(`div`);
	libBook.classList.add(`book`);

	let bookTitle = document.createElement("p");
	let bookAuthor = document.createElement("p");
	let bookPages = document.createElement("p");
	let bookRead = document.createElement("p");
	let bookRM = document.createElement("button");

	bookRM.addEventListener(`click`, function(e){
		console.log(e);
		e.target.parentElement.remove();
	});

	libBook.textContent = "TESTING";
	bookTitle.textContent = book.title;
	bookAuthor.textContent = book.author;
	bookPages.textContent = book.pages;
	bookRead.textContent = book.read;
	bookRM.textContent = "REMOVE";

	libBook.appendChild(bookTitle);
	libBook.appendChild(bookAuthor);
	libBook.appendChild(bookPages);
	libBook.appendChild(bookRead);
	libBook.appendChild(bookRM);

	container.appendChild(libBook);
}

let testBook = new Book("TITLE", "AUTHOR", "150", "READ");
let testBook2 = new Book("TITLE2", "AUTHOR2", "1502", "READ2");
addBookToLibrary(testBook);

addBookToLibrary(testBook2);

const submit = document.querySelector(`#submit`);
submit.addEventListener('click', function(e){

	console.log(document.querySelector('#pages'));
	e.preventDefault();
	console.log(e);

	let tit = document.querySelector('#title').value;
	let aut = document.querySelector('#author').value;
	let num = document.querySelector('#pages').value;
	let rea = document.querySelector('#read').value;

	let newBook = new Book(tit, aut, num, rea);
	addBookToLibrary(newBook);

	document.getElementById('book-input').reset();
});


//let testVal = 6;


// for(let i = 0; i < myLibrary.length; i++){
//         libBook.appendChild(document.createElement('p'));
//
//         container.appendChild(libBook);
// }
