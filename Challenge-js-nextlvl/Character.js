import {getDiceRollArray} from './utils.js'

function Character(data){
  Object.assign(this, data)

  this.getDiceHtml = function(diceCount){
    return getDiceRollArray(diceCount).map(number => `<div class="dice">${number}</div>`).join('');
  }

  this.getCharacterHtml=function(){
  const {elementID, namen, avatar, health, diceCount} = this
  let diceHtml = this.getDiceHtml(diceCount)

  return `<div class="character-card">
      <h4 class="name"> ${namen}</h4>
      <img class="avatar" src="${avatar}"/>
      <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container">${diceHtml} </div></div>
    </div>`;
  }
}

export {Character}
