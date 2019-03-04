// document.addEventListener("DOMContentLoaded", () => {
//   console.log("hi");
//   getAllBrooms()
// })
//
// function getAllBrooms() {
//   fetch("http://localhost:3000/api/v1/brooms")
//     .then(resp => resp.json())
//     .then(brooms => brooms.forEach(broom => {
//       const broomList = document.getElementById('list-group')
//       broomList.addEventListener("click", handleDisplayBroom)
//       broomList.innerHTML += createBroomLi(broom)
//     }))
// }
//
// function getOneBroom(broomId) {
//   fetch(`http://localhost:3000/api/v1/brooms/${broomId}`)
//     .then(resp => resp.json())
//     .then(broom => {
//       console.log(broom);
//       const broomDetail = document.getElementById('broom-detail')
//       broomDetail.innerHTML = ""
//       broomDetail.innerHTML += createBroomDetail(broom)
//       broomDetail.addEventListener("click", handleAddBroom)
//     })
// }
//
// function postAddBroom(broomId) {
//   // fetch()
// }
//
// function createBroomLi(broom) {
//   return `
//     <li class="list-group-item" id="broom-li" data-id=${broom.id}>${broom.make}</li>
//   `
// }
//
// function createBroomDetail(broom) {
//   return `
//     <h2>${broom.make}</h2>
//     <img src="${broom.image_url}"/>
//     <p>Maker: ${broom.creator}</p>
//     <p>Purpose: ${broom.utility}</p>
//     <button data-id="${broom.id}" class="btn btn-info" id="add-broom">Buy Broom!</button>
//   `
// }
//
// function handleDisplayBroom(event) {
//   const broomId = event.target.dataset.id
//   getOneBroom(broomId)
// }
//
// function handleAddBroom(event) {
//   if(event.target.id === "add-broom") {
//     const broomId = event.target.dataset.id
//     console.log(broomId);
//   }
// }
