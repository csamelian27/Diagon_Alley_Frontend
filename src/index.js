const bookLink = document.getElementById('book-store')
bookLink.addEventListener("click", handleShowBooks)
const bookList = document.getElementById('books')
bookList.style.display = "none"
let showBook = false

const broomLink = document.getElementById('broom-store')
broomLink.addEventListener("click", handleShowBrooms)
const broomList = document.getElementById('brooms')
broomList.style.display = "none"
let showBroom = false

const wandLink = document.getElementById('wand-store')
wandLink.addEventListener("click", handleShowWands)
const wandList = document.getElementById('wands')
wandList.style.display = "none"
let showWand = false

const petLink = document.getElementById('pet-store')
petLink.addEventListener("click", handleShowPets)
const petList = document.getElementById('pets')
petList.style.display = "none"
let showPet = false

var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function precarica( img ) {
			$( img ).each( function () {
				$( '<img/>' )[ 0 ].src = this;
			});
		}

	precarica([
      // hogwarts
			'https://imgix.bustle.com/rehost/2016/9/13/70371c31-7d4c-4b46-839f-3225d06f8f99.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70',
      // owl emporium
    	'https://i.pinimg.com/originals/c6/d9/bf/c6d9bf1b6f614b8c97f8fc7f1fea4fff.jpg',
      // map images
			'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-yellow.png',
			'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-red.png',
			'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-pink.png',
			'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-green.png',
			'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-blue.png'
		]);

/*******jQuery for external title*********/

	jQuery(document).ready(function () {
		$('.title-blue').mouseout(function(){
			$("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png');
		}),
		$('.title-blue').mouseover( function(){
			$("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-blue.png');
		});
		$('.title-red').mouseout(function(){
			$("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png');
		}),
		$('.title-red').mouseover( function(){
			$("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-red.png');
		});
		$('.title-green').mouseout(function(){
			$("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png');
		}),
		$('.title-green').mouseover( function(){
			$("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-green.png');
		});
		$('.title-yellow').mouseout(function(){
			$("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png');
		}),
		$('.title-yellow').mouseover( function(){
			$("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-yellow.png');
		});
		$('.title-pink').mouseout(function(){
			$("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png');
		}),
		$('.title-pink').mouseover( function(){
			$("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-blue.png');
		});
	});

document.addEventListener("DOMContentLoaded", () => {
  console.log("hi");
  getAllBooks()
  getAllBrooms()
  getAllWands()
  getAllPets()
})



// Toggle Menu Buttons to Show Different Stores
function handleShowBooks(event) {
  console.log(event.target);
  showBook = !showBook
  const bookList = document.getElementById('books')
  if(showBook) {
    bookList.style.display = "block"
  } else {
    bookList.style.display = "none"
  }
}

function handleShowBrooms(event) {
  console.log(event.target);
  showBroom = !showBroom
  const broomList = document.getElementById('brooms')
  if(showBroom) {
    broomList.style.display = "block"
  } else {
    broomList.style.display = "none"
  }
}

function handleShowWands(event) {
  console.log(event.target);
  showWand = !showWand
  const wandList = document.getElementById('wands')
  if(showWand) {
    wandList.style.display = "block"
  } else {
    wandList.style.display = "none"
  }
}

function handleShowPets(event) {
  console.log(event.target);
  showPet = !showPet
  const petList = document.getElementById('pets')
  if(showPet) {
    petList.style.display = "block"
  } else {
    petList.style.display = "none"
  }
}





// Book Fetches & Functions
function getAllBooks() {
  fetch("http://localhost:3000/api/v1/books")
    .then(resp => resp.json())
    .then(books => books.forEach(book => {
      const bookList = document.getElementById('book-list-group')
      bookList.addEventListener("click", handleDisplayBook)
      bookList.innerHTML += createBookLi(book)
    }))
}

function getOneBook(bookId) {
  fetch(`http://localhost:3000/api/v1/books/${bookId}`)
    .then(resp => resp.json())
    .then(book => {
      const bookDetail = document.getElementById('book-detail')
      bookDetail.innerHTML = ""
      bookDetail.innerHTML += createBookDetail(book)
      bookDetail.addEventListener("click", handleAddBook)
    })
}

function postAddBook(bookId) {
  // fetch()
}

function createBookLi(book) {
  return `
    <li class="list-group-item" id="book-li" data-id=${book.id}>${book.title}</li>
  `
}

function createBookDetail(book) {
  return `
    <h2>${book.title}</h2>
    <p>Written by: ${book.author}</p>
    <p>Subject: ${book.subject}</p>
    <button data-id="${book.id}" class="btn btn-info" id="add-book">Buy Book!</button>
  `
}

function handleDisplayBook(event) {
  const bookId = event.target.dataset.id
  getOneBook(bookId)
}

function handleAddBook(event) {
  if(event.target.id === "add-book") {
    const bookId = event.target.dataset.id
    console.log(bookId);
  }
}



// Broom Fetches & Functions
document.addEventListener("DOMContentLoaded", () => {
  console.log("hi");
  getAllBrooms()
})

function getAllBrooms() {
  fetch("http://localhost:3000/api/v1/brooms")
    .then(resp => resp.json())
    .then(brooms => brooms.forEach(broom => {
      const broomList = document.getElementById('broom-list-group')
      broomList.addEventListener("click", handleDisplayBroom)
      broomList.innerHTML += createBroomLi(broom)
    }))
}

function getOneBroom(broomId) {
  fetch(`http://localhost:3000/api/v1/brooms/${broomId}`)
    .then(resp => resp.json())
    .then(broom => {
      console.log(broom);
      const broomDetail = document.getElementById('broom-detail')
      broomDetail.innerHTML = ""
      broomDetail.innerHTML += createBroomDetail(broom)
      broomDetail.addEventListener("click", handleAddBroom)
    })
}

function postAddBroom(broomId) {
  // fetch()
}

function createBroomLi(broom) {
  return `
    <li class="list-group-item" id="broom-li" data-id=${broom.id}>${broom.make}</li>
  `
}

function createBroomDetail(broom) {
  return `
    <h2>${broom.make}</h2>
    <img src="${broom.image_url}"/>
    <p>Maker: ${broom.creator}</p>
    <p>Purpose: ${broom.utility}</p>
    <button data-id="${broom.id}" class="btn btn-info" id="add-broom">Buy Broom!</button>
  `
}

function handleDisplayBroom(event) {
  const broomId = event.target.dataset.id
  getOneBroom(broomId)
}

function handleAddBroom(event) {
  if(event.target.id === "add-broom") {
    const broomId = event.target.dataset.id
    console.log(broomId);
  }
}




// Wand Fetches & Functions
document.addEventListener("DOMContentLoaded", () => {
  console.log("hi");
  getAllWands()
})

const wandDetail = document.getElementById('wand-detail')

function getAllWands() {
  fetch("http://localhost:3000/api/v1/wands")
    .then(resp => resp.json())
    .then(wands => wands.forEach(wand => {
      // const wandList = document.getElementById('wand-list-group')
      // wandList.addEventListener("click", handleDisplayWand)
      wandDetail.innerHTML += createWandCard(wand)
    }))
}

function getOneWand(wandId) {
  fetch(`http://localhost:3000/api/v1/wands/${wandId}`)
    .then(resp => resp.json())
    .then(wand => {
      wandDetail.innerHTML = ""
      wandDetail.innerHTML += createWandDetail(wand)
      // wandDetail.addEventListener("click", handleAddWand)
    })
}

function postAddWand(wandId) {
  // fetch()
}

function createWandCard(wand) {
  return `	<div class="card">
															 <h2>Wood Type: ${wand.wood}</h2>
															 <img src=${wand.image_url} class="wand-avatar"/>
															 <p> Core:${wand.core}</p>
															 <button data-id=${wand.id} class='wand-card'> See More Details </button>
													 </div>
  `
// <li class="list-group-item" id="wand-li" data-id=${wand.id}>${wand.wood} + ${wand.core}</li>
}

function createWandDetail(wand) {
  return `
    <h2>${wand.wood} + ${wand.core}</h2>
    <img src="${wand.image_url}"/>
    <p>Length: ${wand.length}</p>
    <p>Previous Owner: ${wand.famous_owners}</p>
    <p>History: ${wand.notes}</p>
    <button data-id="${wand.id}" class="btn btn-info" id="add-wand">Buy Wand!</button>
		<button class='return'> Keep Looking </button>
  `
}

wandDetail.addEventListener('click', (e) => {
	if(e.target.className === 'wand-card') {
		const wandId = event.target.dataset.id
	  getOneWand(wandId)
	}
	else if(e.target.className === 'return') {
		getAllWands()
	}
})

// function handleDisplayWand(event) {
//   const wandId = event.target.dataset.id
//   getOneWand(wandId)
// }
//
// function handleAddWand(event) {
//   if(event.target.id === "add-wand") {
//     const wandId = event.target.dataset.id
//     console.log(wandId);
//   }
// }




// Pet Fetches & Functions
document.addEventListener("DOMContentLoaded", () => {
  console.log("hi");
  getAllPets()
})

function getAllPets() {
  fetch("http://localhost:3000/api/v1/pets")
    .then(resp => resp.json())
    .then(pets => pets.forEach(pet => {
      const petList = document.getElementById('pet-list-group')
      petList.addEventListener("click", handleDisplayPet)
      petList.innerHTML += createPetLi(pet)
    }))
}

function getOnePet(petId) {
  fetch(`http://localhost:3000/api/v1/pets/${petId}`)
    .then(resp => resp.json())
    .then(pet => {
      const petDetail = document.getElementById('pet-detail')
      petDetail.innerHTML = ""
      petDetail.innerHTML += createPetDetail(pet)
      petDetail.addEventListener("click", handleAddPet)
    })
}

function postAddPet(petId) {
  // fetch()
}

function createPetLi(pet) {
  return `
    <li class="list-group-item" id="pet-li" data-id=${pet.id}>${pet.name}</li>
  `
}

function createPetDetail(pet) {
  return `
    <h2>${pet.name}</h2>
    <img src="${pet.image_url}"/>
    <p>Breed: ${pet.breed} ${pet.animal}</p>
    <p>Gender: ${pet.gender}</p>
    <p>Age: ${pet.age}</p>
    <p>Previous Owner: ${pet.former_owner}</p>
    <button data-id="${pet.id}" class="btn btn-info" id="add-pet">Buy Pet!</button>
  `
}

function handleDisplayPet(event) {
  const petId = event.target.dataset.id
  getOnePet(petId)
}

function handleAddPet(event) {
  if(event.target.id === "add-pet") {
    const petId = event.target.dataset.id
    console.log(petId);
  }
}
