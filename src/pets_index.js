// document.addEventListener("DOMContentLoaded", () => {
//   console.log("hi");
//   getAllPets()
// })
//
// function getAllPets() {
//   fetch("http://localhost:3000/api/v1/pets")
//     .then(resp => resp.json())
//     .then(pets => pets.forEach(pet => {
//       const petList = document.getElementById('list-group')
//       petList.addEventListener("click", handleDisplayPet)
//       petList.innerHTML += createPetLi(pet)
//     }))
// }
//
// function getOnePet(petId) {
//   fetch(`http://localhost:3000/api/v1/pets/${petId}`)
//     .then(resp => resp.json())
//     .then(pet => {
//       const petDetail = document.getElementById('pet-detail')
//       petDetail.innerHTML = ""
//       petDetail.innerHTML += createPetDetail(pet)
//       petDetail.addEventListener("click", handleAddPet)
//     })
// }
//
// function postAddPet(petId) {
//   // fetch()
// }
//
// function createPetLi(pet) {
//   return `
//     <li class="list-group-item" id="pet-li" data-id=${pet.id}>${pet.name}</li>
//   `
// }
//
// function createPetDetail(pet) {
//   return `
//     <h2>${pet.name}</h2>
//     <img src="${pet.image_url}"/>
//     <p>Breed: ${pet.breed} ${pet.animal}</p>
//     <p>Gender: ${pet.gender}</p>
//     <p>Age: ${pet.age}</p>
//     <p>Previous Owner: ${pet.former_owner}</p>
//     <button data-id="${pet.id}" class="btn btn-info" id="add-pet">Buy Pet!</button>
//   `
// }
//
// function handleDisplayPet(event) {
//   const petId = event.target.dataset.id
//   getOnePet(petId)
// }
//
// function handleAddPet(event) {
//   if(event.target.id === "add-pet") {
//     const petId = event.target.dataset.id
//     console.log(petId);
//   }
// }
