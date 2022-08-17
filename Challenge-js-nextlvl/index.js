import characterData from './data.js'
import {Character} from './Character.js'


function render(){
  document.getElementById("hero").innerHTML=orc.getCharacterHtml()
  document.getElementById("monster").innerHTML=wizard.getCharacterHtml()
}

const wizard= new Character(characterData.hero)
const orc= new Character(characterData.monster)
render()

function attack(){
  wizard.getDiceHtml
  orc.getDiceHtml
  wizard.takeDamage(orc.currentDiceScore)
  orc.takeDamage(wizard.currentDiceScore)
  render()
  if (wizard.dead || orc.dead ){
    endGame()
  }
}
function endGame(){
  const endMessage = wizard.health===0 && orc.health===0 ?
       "both die, no winner!" :
       wizard.health > 0 ? "wizard wins" :
       "orc wins"

  console.log(endMessage)
  const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
  document.body.innerHTML =
       `<div class="end-game">
       <h2>Game Over</h2>
       <h3>${endMessage}</h3>
       <p class="end-emoji">${endEmoji}</p>
   </div>`
}

document.getElementById("attack-button").addEventListener("click", attack)
