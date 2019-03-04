document.addEventListener("DOMContentLoaded", () => {
  console.log("bye");
  const bookLink = document.getElementById('book-index-button')
  bookLink.addEventListener("click", handleShowBooks)
  const broomLink = document.getElementById('broom-index-button')
  broomLink.addEventListener("click", handleShowBrooms)
  const wandLink = document.getElementById('wand-index-button')
  wandLink.addEventListener("click", handleShowWands)
  const petLink = document.getElementById('pet-index-button')
  petLink.addEventListener("click", handleShowPets)
})

function handleShowBooks(event) {
  console.log(event.target);
}

function handleShowBrooms(event) {
  console.log(event.target);
}

function handleShowWands(event) {
  console.log(event.target);
}

function handleShowPets(event) {
  console.log(event.target);
}
