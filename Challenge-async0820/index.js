let deckId
const buttonShuffle = document.getElementById("shuffle")
const buttonDraw = document.getElementById("draw")
const placeCards= document.getElementById("card-load")
const cardRemains= document.getElementById("card-rems")
const cardWhoWins = document.getElementById("card-winner")

buttonShuffle.addEventListener("click", handleClick)
function handleClick(){
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
  .then(res=>res.json())
  .then(data=>{
    cardRemains.textContent = `Remaining Cards: ${data.remaining}`
    // console.log(data)
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
            const winnerText = cardWinner(data.cards[0], data.cards[1])
            cardWhoWins.textContent = winnerText

            cardRemains.textContent = `Remaining Cards: ${data.remaining}`
      })
  })

function cardWinner(cardOne, cardTwo){
  const arrayCards =["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]
  let indexOne = arrayCards.indexOf(cardOne.value)
  let indexTwo = arrayCards.indexOf(cardTwo.value)

  if (indexOne > indexTwo){
    return "You win!"
  }else if(indexTwo > indexOne){
    return "Computer wins"
  } else {
    return "Draw game!"
  }
}
