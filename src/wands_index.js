// document.addEventListener("DOMContentLoaded", () => {
//   console.log("hi");
//   getAllWands()
// })
//
// function getAllWands() {
//   fetch("http://localhost:3000/api/v1/wands")
//     .then(resp => resp.json())
//     .then(wands => wands.forEach(wand => {
//       const wandList = document.getElementById('list-group')
//       wandList.addEventListener("click", handleDisplayWand)
//       wandList.innerHTML += createWandLi(wand)
//     }))
// }
//
// function getOneWand(wandId) {
//   fetch(`http://localhost:3000/api/v1/wands/${wandId}`)
//     .then(resp => resp.json())
//     .then(wand => {
//       const wandDetail = document.getElementById('wand-detail')
//       wandDetail.innerHTML = ""
//       wandDetail.innerHTML += createWandDetail(wand)
//       wandDetail.addEventListener("click", handleAddWand)
//     })
// }
//
// function postAddWand(wandId) {
//   // fetch()
// }
//
// function createWandLi(wand) {
//   return `
//     <li class="list-group-item" id="wand-li" data-id=${wand.id}>${wand.wood} + ${wand.core}</li>
//   `
// }
//
// function createWandDetail(wand) {
//   return `
//     <h2>${wand.wood} + ${wand.core}</h2>
//     <img src="${wand.image_url}"/>
//     <p>Length: ${wand.length}</p>
//     <p>Previous Owner: ${wand.famous_owners}</p>
//     <p>History: ${wand.notes}</p>
//     <button data-id="${wand.id}" class="btn btn-info" id="add-wand">Buy Wand!</button>
//   `
// }
//
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
