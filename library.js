/* jshint esversion: 6 */

let myLibrary = [];

function Book(title, author, pages, read){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary(){

}


const container = document.querySelector(`#container`);

const libBook = document.createElement(`div`);

libBook.textContent = "TESTING";

container.appendChild(libBook);
