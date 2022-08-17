import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js'


function Character(data){
  Object.assign(this, data)

  this.getDiceHtml = function(diceCount){
    this.currentDiceScore = getDiceRollArray(this.diceCount)
    this.diceArray=this.currentDiceScore.map(num => `<div class='dice'>${num}</div>`).join('');
  }
  this.diceArray=getDicePlaceholderHtml(this.diceCount)

  this.takeDamage = function(attackScoreArray){

    console.log(`${this.namen}: ${attackScoreArray}`)
  }

  this.getCharacterHtml=function(){
  const {elementID, namen, avatar, health, diceCount, diceArray} = this;
  let diceHtml = this.getDiceHtml(diceCount);


  return `<div class="character-card">
      <h4 class="name"> ${namen}</h4>
      <img class="avatar" src="${avatar}"/>
      <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container">${diceArray} </div></div>
    </div>`;
  }

}

export {Character}
