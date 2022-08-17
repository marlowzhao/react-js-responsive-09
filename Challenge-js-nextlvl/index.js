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
  render()
  wizard.takeDamage(orc.currentDiceScore)
  orc.takeDamage(wizard.currentDiceScore)
}

document.getElementById("attack-button").addEventListener("click", attack)
