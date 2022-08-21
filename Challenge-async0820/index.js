let deckId
let computerScore =0
let myScore = 0
const buttonShuffle = document.getElementById("shuffle")
const buttonDraw = document.getElementById("draw")
const placeCards= document.getElementById("card-load")
const cardRemains= document.getElementById("card-rems")
const cardWhoWins = document.getElementById("card-winner")
const computerData = document.getElementById("computerscr")
const myData = document.getElementById("myscr")

buttonShuffle.addEventListener("click", handleClick)
function handleClick(){
  buttonShuffle.textContent='Press "Draw"!'
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
  .then(res=>res.json())
  .then(data=>{
    cardRemains.textContent = `Remaining Cards: ${data.remaining}`
    deckId = data.deck_id
  })
}

buttonDraw.addEventListener("click", ()=>{
  buttonShuffle.textContent = 'Shuffle'
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data=> {
            cardRemains.textContent = `Remaining Cards: ${data.remaining}`
            placeCards.children[0].innerHTML=`
                <img class="insert" src=${data.cards[0].image} />`
                placeCards.children[1].innerHTML=`
                <img class="insert" src=${data.cards[1].image} />`
            const winnerText = cardWinner(data.cards[0], data.cards[1])
            cardWhoWins.textContent = winnerText

            if(data.remaining===0){
              buttonDraw.disabled=true
              cardRemains.textContent = 'Game Over'
              if(computerScore>myScore){
                cardWhoWins.textContent="COMPUTER IS THE WINNER"
              } else if(computerScore<myScore){
                cardWhoWins.textContent="YOU ARE THE WINNER"
              } else{
                cardWhoWins.textContent="No winner. Tie game."
              }
            }
      })
  })


  function cardWinner(cardOne, cardTwo){
    const arrayCards =["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]
    let indexOne = arrayCards.indexOf(cardOne.value)
    let indexTwo = arrayCards.indexOf(cardTwo.value)
    if (indexOne > indexTwo){
      myScore ++
      myData.textContent=`Your score: ${myScore}`
      return "You win!"
    }else if(indexTwo > indexOne){
      computerScore ++
      computerData.textContent=`Computer score: ${computerScore}`
      return "Computer wins"
  } else {
    return "Draw game!"
  }
}
