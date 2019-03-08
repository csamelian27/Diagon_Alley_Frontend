// Global Event Listeners
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

const userShow = document.getElementById('user-profile')
userShow.addEventListener("click", handleShowUser)
const userProfile = document.getElementById('user-profile-2')
userProfile.style.display = "none"
let showUser = false

const hogwartsButton = document.getElementById('hogwarts')
hogwartsButton.addEventListener('click', handleShowHogwarts)
// End Global vars


// Begin Map Jquery
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
// End MAP Jquery

// Begin index.js stuff
document.addEventListener("DOMContentLoaded", () => {
  console.log("hi");

  const userForm = document.getElementById('user-name-form')
  userForm.addEventListener("submit", handleGetInfo)
})

// Begin Toggle Menu Buttons to Show/Hide Different Stores
function handleShowBooks(event) {
  console.log(event.target);
  showBook = !showBook
  const bookList = document.getElementById('books')
  if(showBook) {
    getAllBooks()
    bookList.style.display = "block"

    const broomList = document.getElementById('brooms')
    broomList.style.display = "none"

    const wandList = document.getElementById('wands')
    wandList.style.display = "none"

    const petList = document.getElementById('pets')
    petList.style.display = "none"

    const userProfile = document.getElementById('user-profile-2')
    userProfile.style.display = "none"
  } else {
    bookList.style.display = "none"
  }
}

function handleShowBrooms(event) {
  console.log(event.target);
  showBroom = !showBroom
  const broomList = document.getElementById('brooms')
  if(showBroom) {
    getAllBrooms()
    broomList.style.display = "block"

    const bookList = document.getElementById('books')
    bookList.style.display = "none"

    const wandList = document.getElementById('wands')
    wandList.style.display = "none"

    const petList = document.getElementById('pets')
    petList.style.display = "none"

    const userProfile = document.getElementById('user-profile-2')
    userProfile.style.display = "none"
  } else {
    broomList.style.display = "none"
  }
}

function handleShowWands(event) {
  console.log(event.target);
  showWand = !showWand
  const wandList = document.getElementById('wands')
  if(showWand) {
    getAllWands()
    wandList.style.display = "block"

    const broomList = document.getElementById('brooms')
    broomList.style.display = "none"

    const bookList = document.getElementById('books')
    bookList.style.display = "none"

    const petList = document.getElementById('pets')
    petList.style.display = "none"

    const userProfile = document.getElementById('user-profile-2')
    userProfile.style.display = "none"
  } else {
    wandList.style.display = "none"
  }
}

function handleShowPets(event) {
  console.log(event.target);
  showPet = !showPet
  const petList = document.getElementById('pets')
  if(showPet) {
    getAllPets()
    petList.style.display = "block"

    const broomList = document.getElementById('brooms')
    broomList.style.display = "none"

    const wandList = document.getElementById('wands')
    wandList.style.display = "none"

    const bookList = document.getElementById('books')
    bookList.style.display = "none"

    const userProfile = document.getElementById('user-profile-2')
    userProfile.style.display = "none"
  } else {
    petList.style.display = "none"
  }
}

function handleShowUser(event) {
  console.log(event.target);
  showUser = !showUser
  const userProfile = document.getElementById('user-profile-2')
  getOneUser()
  if(showUser && currentUser) {
    userProfile.style.display = "block"

    const broomList = document.getElementById('brooms')
    broomList.style.display = "none"

    const bookList = document.getElementById('books')
    bookList.style.display = "none"

    const wandList = document.getElementById('wands')
    wandList.style.display = "none"

    const petList = document.getElementById('pets')
    petList.style.display = "none"
  } else if(!currentUser){
    bookList.style.display = "none"
    console.log("suppppp");
    alert("Sorry, you must register for Hogwarts first!");
  }
}

function handleShowHogwarts(event) {
  console.log(event.target);
  // showHogwarts = !showHogwarts
  const body = document.querySelector('body')
  body.innerHTML= ""
  body.innerHTML += getHogwarts()
}
// End Toggle Menu Buttons to Show/Hide Different Stores

function getHogwarts() {
  return `
  <div class="parallax">
  <h1 id="hogwarts-h1">All Aboard the Train to Hogwarts!</h1>
  <a href="#" id="back" onclick="location.href = document.referrer; return false;"> Return To Diagon Alley</a>
  </div>
  `
}

// Begin Users Fetches & Functions
let currentUser = ""
function getOneUser() {
  fetch(`http://localhost:3000/api/v1/users/${currentUser.id}`)
  .then(resp => resp.json())
  .then(user => {
    currentUser = user
    console.log(user);
    // const userProfile2 = document.getElementById('user-profile-2')
    createUserDetail(currentUser)
  })
}

function postNewUser(userData) {
  fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(resp => resp.json())
  .then(user => {
    currentUser = user
    console.log(currentUser);
    // const userProfile = document.getElementById('user-profile-2')
    // userProfile.innerHTML = ""
    // createUserDetail(currentUser)
    // userProfile.addEventListener("click", handleRemoveItems)
  })
}

function destroyUser() {
  fetch(`http://localhost:3000/api/v1/users/${currentUser.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(json => {
      console.log(json)
      showDeletePage()
      currentUser = ""
    })
}

function handleGetInfo(event) {
  event.preventDefault()
  const userName = event.target[0].value
  const gryffindor = event.target[1].checked === true
  const ravenclaw = event.target[2].checked === true
  const slytherin = event.target[3].checked === true
  const hufflepuff = event.target[4].checked === true

  let userHouse

  if(gryffindor) {
    userHouse = "Gryffindor"
  } else if (ravenclaw) {
    userHouse = "Ravenclaw"
  } else if (slytherin) {
    userHouse = "Slytherin"
  } else if (hufflepuff) {
    userHouse = "hufflepuff"
  } else {
    return 'Please select a characteristic!'
  }

  const userData = {
    name: userName,
    house: userHouse
  }

  postNewUser(userData)
}

function showUserProfile() {
  const body = document.querySelector('body')
  body.innerHTML = createUserDetail
}

function createUserDetail(currentUser) {
    const userProfile = document.getElementById('user-profile-2')
    userProfile.innerHTML = ""

    const profileDiv = document.createElement('div')
    profileDiv.className = "user-profile col-md-8"
    profileDiv.id = "profile"

    const supplyListDiv = document.createElement('div')
    supplyListDiv.className = "supply-list col-md-4"
    supplyListDiv.id = "supply-list"

    const nameH2 = document.createElement('h2')
    nameH2.className = "capitalize"
    nameH2.innerText = currentUser.name

    const houseDiv = document.createElement('div')
    houseDiv.innerHTML = renderHouseCrest()

    const linebreak1 = document.createElement("br");
    const linebreak2 = document.createElement("br");
    const linebreak3 = document.createElement("br");
    const linebreak4 = document.createElement("br");
    const linebreak5 = document.createElement("br");
    const linebreak6 = document.createElement("br");
    const linebreak7 = document.createElement("br");
    const linebreak8 = document.createElement("br");
    const linebreak9 = document.createElement("br");

    const wandImg = document.createElement('img')
    wandImg.id = "user-wand-img"
    const wandLabel = document.createElement('label')
    if(currentUser.wands.length) {
      wandLabel.innerText = "Wand: " + currentWand.wand.wood + " + " + currentWand.wand.core
      wandImg.src = currentWand.wand.image_url
    } else {
      wandLabel.innerText = "Wand: No wand purchased yet"
    }

    const bookImg = document.createElement('img')
    bookImg.id = "user-book-img"
    const bookLabel = document.createElement('label')
    if(currentUser.books.length) {
      bookLabel.innerText = "Book: " + currentBook.book.title
      bookImg.src = currentBook.book.image_url
    } else {
      bookLabel.innerText = "Book: No book purchased yet"
    }

    const broomImg = document.createElement('img')
    broomImg.id = "user-broom-img"
    const broomLabel = document.createElement('label')
    if(currentUser.brooms.length) {
      broomLabel.innerText = "Broom: " + currentBroom.broom.make
      broomImg.src = currentBroom.broom.image_url
    } else {
      broomLabel.innerText = "Broom: No broom purchased yet"
    }

    const petImg = document.createElement('img')
    petImg.id = "user-pet-img"
    const petLabel = document.createElement('label')
    if(currentUser.pets.length) {
      petLabel.innerText = `Pet: ${currentUser.pets[0].name}`
      petImg.src = currentPet.pet.image_url
    } else {
      petLabel.innerText = "Pet: No pet purchased yet"
    }

    // const editUserButton = document.createElement('button')
    // editUserButton.innerText = "Edit User"
    // editUserButton.id = "edit-user"
    // editUserButton.className = "btn btn-dark"
    // editUserButton.addEventListener('click', handleEditUser)

    const deleteUserButton = document.createElement('button')
    deleteUserButton.innerText = "Delete User"
    deleteUserButton.id = "delete-user"
    deleteUserButton.className = "btn btn-dark"
    deleteUserButton.addEventListener('click', handleDeleteUser)

    const supplyHeader = document.createElement('h2')
    supplyHeader.innerText = "Supply List"
    supplyListDiv.append(supplyHeader)

    const supplyUl = document.createElement('ul')
    const bookCheck = document.createElement('li')
    if(currentBook) {
      bookCheck.innerText = "Book ✔️"
    } else if(!currentBook) {
      bookCheck.innerText = "Still need to purchase a Book!"
    }

    const broomCheck = document.createElement('li')
    if(currentBroom) {
      broomCheck.innerText = "Broom ✔️"
    } else if(!currentBroom) {
      broomCheck.innerText = "Still need to purchase a Broom!"
    }

    const wandCheck = document.createElement('li')
    if(currentWand) {
      wandCheck.innerText = "Book ✔️"
    } else if(!currentBook) {
      wandCheck.innerText = "Still need to purchase a Book!"
    }

    const petCheck = document.createElement('li')
    if(currentPet) {
      petCheck.innerText = "Pet ✔️"
    } else if(!currentPet) {
      petCheck.innerText = "Still need to purchase a Pet!"
    }

    userProfile.append(profileDiv, supplyListDiv)
    profileDiv.append(nameH2, houseDiv, wandLabel, linebreak1, wandImg, linebreak2, bookLabel, linebreak3, bookImg, linebreak4, broomLabel, linebreak5, broomImg, linebreak6, petLabel, linebreak7, petImg, linebreak8, linebreak9, deleteUserButton)
    supplyListDiv.append(supplyUl)
    supplyUl.append(bookCheck, broomCheck, petCheck, wandCheck)
}

// https://banner2.kisspng.com/20180403/luq/kisspng-harry-potter-hogwarts-gryffindor-slytherin-house-c-crest-5ac37340e4e6e7.4091721115227584649376.jpg
function renderHouseCrest() {
  if(currentUser.house === "Gryffindor") {
    return `<img id="house-flag" src="https://images-na.ssl-images-amazon.com/images/I/81mv7IXpc6L._SY606_.jpg"/>`
  } else if(currentUser.house === "Ravenclaw") {
    return `<img id="house-flag" src="https://images-na.ssl-images-amazon.com/images/I/61XvQSdFHlL._SL1010_.jpg"/>`
  } else if(currentUser.house === "Slytherin") {
    return `<img id="house-flag" src="https://images-na.ssl-images-amazon.com/images/I/61n%2B3Bsn6PL._SL1010_.jpg"/>`
  } else if(currentUser.house === "hufflepuff") {
    return `<img id="house-flag" src="https://images-na.ssl-images-amazon.com/images/I/61CZcW%2ByIDL._SL1010_.jpg"/>`
  } else {
    return `<p>Please create an Account to be sorted into a House!</p>`
  }
}

// function handleEditUser(event) {
//   if(event.target.id === "edit-user") {
//     console.log("edit");
//   }
// }

function handleDeleteUser(event) {
  if(event.target.id === "delete-user") {
    destroyUser()
  }
}

function showDeletePage() {
  const body = document.querySelector('body')
  body.innerHTML = `<a href="#" id="back" onclick="location.href = document.referrer; return false;"> Return To Diagon Alley</a>`
}
// End User Fetches & Functions


// Book Fetches & Functions
function getAllBooks() {
  fetch("http://localhost:3000/api/v1/books")
    .then(resp => resp.json())
    .then(books => {
      const bookList = document.getElementById('book-list-group')
      bookList.innerHTML = ""
      books.forEach(book => {
      bookList.addEventListener("click", handleDisplayBook)
      bookList.innerHTML += createBookLi(book)
    })
  })
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

let currentBook = ""
function postUserBook(bookId) {
  fetch("http://localhost:3000/api/v1/user_books", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({book_id: bookId, user_id: currentUser.id})
  })
  .then(resp => resp.json())
  .then(userBook => {
    currentBook = userBook
    console.log(currentBook);
  })
}

function createBookLi(book) {
  return `
    <li class="list-group-item" id="book-li" data-id=${book.id}>${book.title}</li>
  `
}

function createBookDetail(book) {
  return `
    <div id="book-detail-padding">
    <h2>${book.title}</h2>
    <img id="book-img" src="${book.image_url}"/><br>
    <label>Written by: </label>
    <p>${book.author}</p>
    <label>Subject: </label>
    <p>${book.subject}</p>
    <button data-id="${book.id}" class="btn btn-info" id="add-book">Buy Book!</button>
    </div>
  `
}

function handleDisplayBook(event) {
  const bookId = event.target.dataset.id
  getOneBook(bookId)
}

function handleAddBook(event) {
  if(event.target.id === "add-book") {
    const bookId = event.target.dataset.id
    event.target.innerText = 'Bought!'
    postUserBook(bookId)
  }
}


// Broom Fetches & Functions
function getAllBrooms() {
  fetch("http://localhost:3000/api/v1/brooms")
    .then(resp => resp.json())
    .then(brooms => {
      const broomList = document.getElementById('broom-list-group')
      broomList.innerHTML = ""
      brooms.forEach(broom => {
      broomList.addEventListener("click", handleDisplayBroom)
      broomList.innerHTML += createBroomLi(broom)
    })
  })
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

let currentBroom = ""
function postUserBroom(broomId) {
  fetch("http://localhost:3000/api/v1/user_brooms", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({broom_id: broomId, user_id: currentUser.id})
  })
  .then(resp => resp.json())
  .then(userBroom => {
    currentBroom = userBroom
    console.log(currentBroom);
  })
}

function createBroomLi(broom) {
  return `
    <li class="list-group-item" id="broom-li" data-id=${broom.id}>${broom.make}</li>
  `
}

function createBroomDetail(broom) {
  return `
    <div id="broom-detail-padding">
    <h2>${broom.make}</h2>
    <img id="broom-img" src="${broom.image_url}"/><br>
    <label>Maker: </label>
    <p>${broom.creator}</p>
    <label>Purpose: </label>
    <p>${broom.utility}</p><br>
    <button data-id="${broom.id}" class="btn btn-info" id="add-broom">Buy Broom!</button>
    </div>
  `
}

function handleDisplayBroom(event) {
  const broomId = event.target.dataset.id
  getOneBroom(broomId)
}

function handleAddBroom(event) {
  if(event.target.id === "add-broom") {
   const broomId = event.target.dataset.id
   event.target.innerText = 'Bought!'
   postUserBroom(broomId)
  }
}




// Wand Fetches & Functions
const wandDetail = document.getElementById('wand-detail')

function getAllWands() {
  fetch("http://localhost:3000/api/v1/wands")
    .then(resp => resp.json())
    .then(wands => {
      wandDetail.innerHTML = ""
      wands.forEach(wand => {
      wandDetail.innerHTML += createWandCard(wand)
    })
  })
}

function getOneWand(wandId) {
  fetch(`http://localhost:3000/api/v1/wands/${wandId}`)
    .then(resp => resp.json())
    .then(wand => {
      wandDetail.innerHTML = ""
      wandDetail.innerHTML += createWandDetail(wand)
      wandDetail.addEventListener("click", handleAddWand)
    })
}

let currentWand = ""
function postUserWand(wandId) {
  fetch("http://localhost:3000/api/v1/user_wands", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({wand_id: wandId, user_id: currentUser.id})
  })
  .then(resp => resp.json())
  .then(userWand => {
    currentWand = userWand
    console.log(currentWand);
  })
}

function createWandCard(wand) {
  return `
    <div class="card col-md-4" id="wand-card">
    <h3 id="wand-own-label">Formerly Owned By:</h3>
    <h5 id="wand-own">${wand.famous_owners}</h5>
  	<img src=${wand.image_url} class="wand-avatar"/><br>
    <p id="wand-wood-core">${wand.wood} + ${wand.core}</p>
  	<button data-id=${wand.id} id="wand-btn" class='wand-card'> See More Details </button><br>
  	</div>
  `
// <li class="list-group-item" id="wand-li" data-id=${wand.id}>${wand.wood} + ${wand.core}</li>
}

function createWandDetail(wand) {
  return `
    <h2>${wand.wood} + ${wand.core}</h2>
    <img id="wand-detail-img" src="${wand.image_url}"/><br><br>
    <label>Length: </label>
    <p>${wand.length}<p>
    <label>Previous Owner: </label>
    <p>${wand.famous_owners}</p>
    <label>History: </label>
    <p>${wand.notes}</p>
    <button data-id="${wand.id}" class="btn btn-info" id="add-wand">Buy Wand!</button>
		<button class='return btn btn-info'> Keep Looking </button>
  `
}

wandDetail.addEventListener('click', (e) => {
	if(e.target.className === 'wand-card') {
		const wandId = event.target.dataset.id
	  getOneWand(wandId)
	}
	else if(e.target.className === 'return btn btn-info') {
		getAllWands()
	}
})

// function handleDisplayWand(event) {
//   const wandId = event.target.dataset.id
//   getOneWand(wandId)
// }
//
function handleAddWand(event) {
  if(event.target.id === "add-wand") {
    const wandId = event.target.dataset.id
    event.target.innerText = 'Bought!'
    postUserWand(wandId)
  }
}

// END WAND FETCHES & FUNCTIONS




// Pet Fetches & Functions
function getAllPets() {
  fetch("http://localhost:3000/api/v1/pets")
    .then(resp => resp.json())
    .then(pets => {
      const petList = document.getElementById('pet-list-group')
      petList.innerHTML = ""
      pets.forEach(pet => {
      petList.addEventListener("click", handleAddPet)
      petList.innerHTML += createPetCard(pet)
    })
  })
}

// function getOnePet(petId) {
//   fetch(`http://localhost:3000/api/v1/pets/${petId}`)
//     .then(resp => resp.json())
//     .then(pet => {
//       const petDetail = document.querySelector('.pet-detail')
//       petDetail.innerHTML = ""
//       petDetail.innerHTML += createPetDetail(pet)
//       petDetail.addEventListener("click", handleAddPet)
//     })
// }

let currentPet = ""
function postUserPet(petId) {
  fetch("http://localhost:3000/api/v1/user_pets", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({pet_id: petId, user_id: currentUser.id})
  })
  .then(resp => resp.json())
  .then(userPet => {
    currentPet = userPet
    console.log(currentPet);
  })
}

function createPetCard(pet) {
  return `
    <div class="card-body col-md-3 ml-auto">
      <h2 class="card-title">${pet.name}</h2>
      <p id="pet-breed">${pet.breed} ${pet.animal}</p>
      <img class="pet-img" src="${pet.image_url}"/><br>
      <label>Gender: </label><p>${pet.gender}</p>
      <label>Age: </label><p>${pet.age} Years Old</p>
      <label>Previous Owner: </label>
      <p>${pet.former_owner}</p>
      <button data-id="${pet.id}" data-user-id="" class="btn btn-dark" id="add-pet">Buy Pet!</button><br><br>
    </div>
  `
}

function handleAddPet(event) {
  if(event.target.tagName === 'BUTTON') {
    const petId = event.target.dataset.id
    event.target.innerText = 'Bought!'
    postUserPet(petId)
  }
}









//
