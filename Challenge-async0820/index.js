
let deckId
const button = document.getElementById("shuffle")
const buttonDraw = document.getElementById("draw")
const placeCards= document.getElementById("card-load")

button.addEventListener("click", handleClick)
function handleClick(){
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    deckId = data.deck_id
  })
}


buttonDraw.addEventListener("click", ()=>{
  fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
  .then(res => res.json())
  .then(data=> {
    placeCards.children[0].innerHTML=`
    <img class="insert" src=${data.cards[0].image} />`
    placeCards.children[1].innerHTML=`
    <img class="insert" src=${data.cards[1].image} />`
  })
})
