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
  if(showUser) {
    userProfile.style.display = "block"

    const broomList = document.getElementById('brooms')
    broomList.style.display = "none"

    const bookList = document.getElementById('books')
    bookList.style.display = "none"

    const wandList = document.getElementById('wands')
    wandList.style.display = "none"

    const petList = document.getElementById('pets')
    petList.style.display = "none"
  } else {
    bookList.style.display = "none"
  }
}

function handleShowHogwarts(event) {
  console.log(event.target);
  // showHogwarts = !showHogwarts
  const body = document.querySelector('body')
  body.innerHTML= ""
  body.innerHTML += getHogwarts()
  body.addEventListener('click', handleBackToDiagon)
}
// End Toggle Menu Buttons to Show/Hide Different Stores

function getHogwarts() {
  return `
  <div id="bg-div">
    <h1>All Aboard the Train to Hogwarts!</h1>
    <button id="back-to-diagon">Back to Diagon Alley</button>
  </div>
  `
}

function handleBackToDiagon(event) {
  const body = document.querySelector('body')
  if(event.target.id === "back-to-diagon") {
    body.innerHTML = ""
    body.innerHTML = `
        <!-- Modal -->
        <div class="modal fade in" id="darkModalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div class="modal-dialog" role="document">
            <!--Content-->
            <div class="modal-content card card-image" style="background-image: url('https://mdbootstrap.com/img/Photos/Others/pricing-table%20(7).jpg');">
              <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                <!--Header-->
                <div class="modal-header text-center pb-4">
                  <h3 class="modal-title w-100 white-text font-weight-bold" id="myModalLabel"><strong>CREATE</strong> <a
                      class="green-text font-weight-bold"><strong> ACCOUNT</strong></a></h3>
                  <button type="button" class="close white-text" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <!--Body-->
                <div class="modal-body">
                  <!--Body-->
                  <form id="user-name-form">
                  <div class="md-form mb-5">
                      <label data-error="wrong" data-success="right" for="user-name" style="color:black">Your name: </label>
                      <input type="text" id="user-name" class="form-control validate white-text">
                  </div><br />

                  <div class="md-form pb-3">
                    <p><strong>Choose your most valued characteristic:</strong></p>

                    <div>
                      <label for="bravery">Bravery</label>
                      <input type="checkbox" id="bravery" name="bravery"><br />
                    <!-- </div> -->

                    <!-- <div> -->
                      <label for="intellect">Intellect</label>
                      <input type="checkbox" id="intellect" name="intellect"><br />
                    <!-- </div> -->

                    <!-- <div> -->
                      <label for="cunning">Cunning</label>
                      <input type="checkbox" id="cunning" name="cunning"><br />
                    <!-- </div> -->

                    <!-- <div> -->
                      <label for="loyalty">Loyalty</label>
                      <input type="checkbox" id="loyalty" name="loyalty">
                    </div>

                    <!-- <input type="checkbox" id="myCheck" class="form-control validate white-text" onclick="myFunction()">
                    <label data-error="wrong" data-success="right" for="house-question">What is your most valued characteristic?</label>
                    <div class="form-group mt-4">
                      <input class="form-check-input" type="checkbox" id="checkbox624">
                      <label for="checkbox624" class="white-text form-check-label">Accept the<a href="#" class="green-text font-weight-bold">
                          Terms and Conditions</a></label>
                    </div> -->
                  </div>

                  <!--Grid row-->
                  <div class="row d-flex align-items-center mb-4" id="sign-up-button">

                    <!--Grid column-->
                    <div class="text-center mb-3 col-md-12">
                      <input type="submit" class="btn btn-success btn-block btn-rounded z-depth-1" id="myFormSubmit" value="Sign Up"/>
                      <button class="btn btn-success btn-block btn-rounded z-depth-1" id="closeForm" data-dismiss="modal">Close</button>
                    </div>
                    <!--Grid column-->

                  </form>
                  </div>
                  <!--Grid row-->

                  <!--Grid row-->
                  <div class="row">

                    <!--Grid column-->
                    <!-- <div class="col-md-12">
                      <p class="font-small white-text d-flex justify-content-end">Have an account? <a href="#" class="green-text ml-1 font-weight-bold">
                          Log in</a></p>
                    </div> -->
                    <!--Grid column-->

                  </div>
                  <!--Grid row-->

                </div>
              </div>
            </div>
            <!--/.Content-->
          </div>
        </div>
        <!-- Modal -->


        <div class="text-center">
          <a href="#myModal" role="button" class="btn btn-primary btn-rounded" data-toggle="modal" data-target="#darkModalForm">Create Account to Travel to Diagon Alley</a>
        </div>

      <!-- <h1>Welcome to Diagon Alley!</h1> -->
      <!-- <a href="src/books_index.js" id="book-index-a" class="btn btn-info">Visit Book Store!</a>
      <a href="src/brooms_index.js" id="broom-index-a" class="btn btn-info">Visit Broom Store!</a>
      <a href="src/wands_index.js" id="wand-index-a" class="btn btn-info">Visit Wand Store!</a>
      <a href="src/pets_index.js" id="pet-index-a" class="btn btn-info">Visit Pet Store!</a> -->
    <!--
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Diagon Alley</a>
          </div>
          <ul class="nav navbar-nav">
            <!-- <li class="active"><a href="#">Diagon Alley</a></li> -->
            <!-- <li><a id="book-store" href="#">Flourish & Blotts</a></li>
            <li><a id="broom-store" href="#">Quality Quidditch Supplies</a></li>
            <li><a id="wand-store" href="#">Ollivander's Wands</a></li>
            <li><a id="pet-store" href="#">Eeylops Owl Emporium</a></li>
          </ul> -->
          <!-- <form class="navbar-form navbar-left" action="/action_page.php">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
          </form> -->
        <!-- </div>
      </nav> -->

      <div class="container">
        <h1>Diagon Alley</h1>
        <div class="title">
          <ul>
            <li><a id="book-store" class="title-blue" href="#">Flourish & Blotts</a></li>
            <li><a id="broom-store" class="title-red" href="#">Quality Quidditch Supplies</a></li>
            <li><a id="wand-store" class="title-green" href="#">Ollivander's Wands</a></li>
            <li><a id="pet-store" class="title-yellow" href="#">Eeylops Owl Emporium</a></li>
            <li><a id="hogwarts" class="title-pink" href="#">Hogwarts</a></li>
            <li><a id="user-profile" class="title-original" href="#">View Profile</a></li>
          </ul>
        </div>
        <img id="map" src="http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png">
        <map name="map">
              <area onmouseover onmouseout shape="poly" coords="206,133, 223,123, 287,86, 295,86, 315,98, 322,102, 329,99, 331,102, 341,113, 354,120, 383,137, 367,145, 363,147, 363,151, 360,167, 347,177, 338,181, 328,181, 314,181, 300,187, 294,187, 261,168, 248,161, 236,153, 206,133" href="#">
              <area onmouseover onmouseout shape="poly" coords="384,181, 382,201, 379,209, 363,224, 358,219, 355,218, 351,220, 347,217, 341,212, 347,208, 352,198, 347,188, 342,184, 342,181, 348,177, 361,168, 363,152, 364,148, 367,145, 379,139, 387,137, 395,139, 412,149, 416,149, 417,146, 416,111, 417,102, 424,96, 441,86, 447,86,
              465,95, 470,103, 470,182,
              471,187, 475,192, 548,234, 567,245, 569,247, 547,260, 533,268, 529,270, 526,267, 519,254, 510,269, 504,278, 497,288, 486,295, 478,294, 434,269, 413,255, 411,250, 410,236, 406,226, 393,213, 388,206, 386,198, 385,181, 384,181" href="#">
              <area onmouseover onmouseout shape="poly" coords="342,379, 369,364, 373,360, 374,354, 374,316, 375,312, 379,311, 392,312, 403,318, 410,327, 416,304, 418,296, 423,287, 432,284, 442,288, 471,303, 477,302, 498,290, 501,286, 519,256, 526,268, 529,271, 533,270, 567,249, 575,249, 592,259, 593,251, 594,245, 599,241, 638,218,
              645,218, 665,229,
              669,236, 669,297, 671,303, 675,307, 683,312, 667,322, 563,382, 460,442, 450,442, 348,383, 342,379" href="#">
              <area onmouseover onmouseout shape="poly" coords="183,286, 204,274, 301,217, 315,215, 333,215, 337,215, 342,216, 346,219, 351,222, 356,219, 358,219, 363,224, 369,220, 369,219, 379,210, 383,202, 385,188, 385,203, 388,210, 405,227, 409,232, 410,238, 410,242, 410,252, 413,257, 421,262, 475,293, 481,297, 474,301, 466,299,
              440,284, 431,282,
              422,286, 416,295, 410,322, 393,311, 373,310, 373,315, 373,356, 369,363, 344,376, 339,377, 261,332, 184,288, 183,286" href="#">
              <area onmouseover onmouseout shape="poly" coords="61,217, 102,192, 106,189, 107,184, 107,82, 108,76, 112,73, 117,70, 120,64, 120,23, 124,17, 130,14, 134,7, 137,3, 141,6, 143,8, 151,14, 153,23, 154,51, 155,55, 157,57, 168,66, 170,81, 170,135, 170,140, 179,141, 186,137, 197,132, 208,136, 221,144, 234,153, 248,162,
              263,170, 292,187, 295,190,
              295,194, 294,201, 299,208, 306,213, 303,215, 184,284, 177,284, 63,218, 61,217" href="#">
         </map>
      </div>

      <!-- BOOK INDEX & SHOW -->
      <!-- <h1>Welcome to The Book Store!</h1> -->
        <div class='row' id="books">
          <div class='col-md-4'>
            <ul class="list-group" id="book-list-group">

            </ul>
          </div>

          <div class='col-md-8'>
            <div id="book-detail">

            </div>
          </div>
        </div>
      <!-- END BOOK -->

      <!-- BROOM INDEX & SHOW -->
      <!-- <h1>Welcome to The Broom Store!</h1> -->
      <div class='row' id="brooms">
        <div class='col-md-4'>
          <ul class="list-group" id="broom-list-group">

          </ul>
        </div>

        <div class='col-md-8'>
          <div id="broom-detail">

          </div>
        </div>
      </div>
      <!-- END BROOM -->

      <!-- WAND INDEX & SHOW -->
      <!-- <h1>Welcome to The Wand Store!</h1> -->
        <div class='row' id="wands">
          <div class='col-md-4'>
            <ul class="list-group" id="wand-list-group">

            </ul>
          </div>

          <div class='col-md-8'>
            <div id="wand-detail">

            </div>
          </div>
        </div>
      <!-- END WAND -->

      <!-- PET INDEX & SHOW -->
        <!-- PET - Beer code challenge setup -->
          <!-- <h1>Welcome to The Pet Store!</h1> -->
            <!-- <div class='row' id="pets">
              <div class='col-md-4'>
                <ul class="list-group" id="pet-list-group">

                </ul>
              </div>

              <div class='col-md-8'>
                <div id="pet-detail">

                </div>
              </div>
            </div> -->

        <!-- PET - Card setup  -->
        <div class="card text-center" id="pets">
          <div class="card-header">
            <ul class="nav nav-pills card-header-pills">
              <li class="nav-item">
                <a class="nav-link" href="#">Owls</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Cats</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Dogs</a>
              </li>
            </ul>
          </div>
          <div id="pet-list-group">


            <!-- <h5 class="card-title">Special title treatment</h5> -->
            <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->

          </div>
        </div>
      <!-- END PET -->

      <!-- Begin User Profile Page -->
      <div id="user-profile-2" class="user-profile">

      </div>
      <!-- End User Profile Page -->

      <!-- Begin Hogwarts -->

      <div id="hogwarts-div">

        </div>

      <!-- End Hogwarts -->

        <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
        <script src="src/index.js"></script>
    `
  }
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

    const wandP = document.createElement('p')
    if(currentUser.wand_id) {
      wandP.innerText = "Wand Id: " + currentUser.wand_id
    } else {
      wandP.innerText = 'No wand purchased yet'
    }
    const broomP = document.createElement('p')
    if(currentUser.broom_id) {
      broomP.innerText = "Broom Id: " + currentUser.broom_id
    } else {
      broomP.innerText = 'No broom purchased yet'
    }
    const petP = document.createElement('p')
    if(currentUser.pet_id) {
      petP.innerText = "Pet Id: " + currentUser.pet_id
    } else {
      petP.innerText = 'No pet purchased yet'
    }

    const editUserButton = document.createElement('button')
    editUserButton.innerText = "Edit User"
    editUserButton.id = "edit-user"
    editUserButton.className = "btn btn-dark"
    editUserButton.addEventListener('click', handleEditUser)

    const deleteUserButton = document.createElement('button')
    deleteUserButton.innerText = "Delete User"
    deleteUserButton.id = "delete-user"
    deleteUserButton.className = "btn btn-dark"
    deleteUserButton.addEventListener('click', handleDeleteUser)

    const supplyHeader = document.createElement('h2')
    supplyHeader.innerText = "Supply List"
    supplyListDiv.append(supplyHeader)

    userProfile.append(profileDiv, supplyListDiv)
    profileDiv.append(nameH2, houseDiv, wandP, broomP, petP, editUserButton, deleteUserButton)

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

function handleEditUser(event) {
  if(event.target.id === "edit-user") {
    console.log("edit");
  }
}

function handleDeleteUser(event) {
  if(event.target.id === "delete-user") {
    destroyUser()
  }
}

function showDeletePage() {
  const body = document.querySelector('body')
  body.innerText = "GOODBYE!"
}
// End User Fetches & Functions


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
    postUserBook(bookId)
  }
}



// Broom Fetches & Functions
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
    <p>${broom.utility}</p>
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
    postUserBroom(broomId)
  }
}




// Wand Fetches & Functions
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
    <div class="card">
    <h2>${wand.wood} + ${wand.core}</h2>
  	<img src=${wand.image_url} class="wand-avatar"/><br>
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
function handleAddWand(event) {
  if(event.target.id === "add-wand") {
    const wandId = event.target.dataset.id
    postUserWand(wandId)
  }
}

// END WAND FETCHES & FUNCTIONS




// Pet Fetches & Functions
function getAllPets() {
  fetch("http://localhost:3000/api/v1/pets")
    .then(resp => resp.json())
    .then(pets => pets.forEach(pet => {
      const petList = document.getElementById('pet-list-group')
      petList.addEventListener("click", handleAddPet)
      petList.innerHTML += createPetCard(pet)
    }))
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
    postUserPet(petId)
  }
}









//
