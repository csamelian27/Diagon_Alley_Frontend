// document.addEventListener("DOMContentLoaded", () => {
//   console.log("hi");
//
// })
//
// function getAllBooks() {
//   fetch("http://localhost:3000/api/v1/books")
//     .then(resp => resp.json())
//     .then(books => books.forEach(book => {
//       const bookList = document.getElementById('list-group')
//       bookList.addEventListener("click", handleDisplayBook)
//       bookList.innerHTML += createBookLi(book)
//     }))
// }
//
// function getOneBook(bookId) {
//   fetch(`http://localhost:3000/api/v1/books/${bookId}`)
//     .then(resp => resp.json())
//     .then(book => {
//       const bookDetail = document.getElementById('book-detail')
//       bookDetail.innerHTML = ""
//       bookDetail.innerHTML += createBookDetail(book)
//       bookDetail.addEventListener("click", handleAddBook)
//     })
// }
//
// function postAddBook(bookId) {
//   // fetch()
// }
//
// function createBookLi(book) {
//   return `
//     <li class="list-group-item" id="book-li" data-id=${book.id}>${book.title}</li>
//   `
// }
//
// function createBookDetail(book) {
//   return `
//     <h2>${book.title}</h2>
//     <p>Written by: ${book.author}</p>
//     <p>Subject: ${book.subject}</p>
//     <button data-id="${book.id}" class="btn btn-info" id="add-book">Buy Book!</button>
//   `
// }
//
// function handleDisplayBook(event) {
//   const bookId = event.target.dataset.id
//   getOneBook(bookId)
// }
//
// function handleAddBook(event) {
//   if(event.target.id === "add-book") {
//     const bookId = event.target.dataset.id
//     console.log(bookId);
//   }
// }
