// Create variables for the game state
let player1turn=false
let player1Score=0
let player2Score=0
// dom
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const btnRoll = document.getElementById("rollBtn")
const btnReset = document.getElementById("resetBtn")

function endGame(){
  btnRoll.style.display="none";
  btnReset.style.display="block";
  }


function restart(){
  btnReset.style.display="none";
  btnRoll.style.display="block";
  player1Scoreboard.textContent=0;
  player2Scoreboard.textContent=0;
  player1Dice.textContent="-";
  player2Dice.textContent="-";
  player1turn=false;
  player1Score=0;
  player2Score=0;
  message.textContent= 'Let Player1 play';
}

//roll a number between 1 and 6
btnRoll.addEventListener("click",function() {
 const randomN=Math.floor(Math.random()*6)+1;
 console.log(randomN);

 const playersTurn=player1turn? "Player 1" : "Player 2"
 message.textContent=`Let ${playersTurn} play`;

//  let player2Score = parseInt(player2Scoreboard.textContent);
//  let player1Score = parseInt(player1Scoreboard.textContent);

 if(player1turn){
  player2Dice.textContent=randomN
  player1Dice.classList.remove("active")
  player2Dice.classList.add("active")
  player2Score += randomN
  player2Scoreboard.textContent=player2Score
 }else{
  player1Dice.textContent=randomN
  player2Dice.classList.remove("active")
  player1Dice.classList.add("active")
  player1Score += randomN
  player1Scoreboard.textContent=player1Score
 }


 if (player1Score >=20) {
  message.textContent="Player 1 has won";
  endGame();


 } else if(player2Score >=20){
  message.textContent="Player 2 has won";
  endGame();

 }

 player1turn = !player1turn
})


btnReset.addEventListener("click", restart)
