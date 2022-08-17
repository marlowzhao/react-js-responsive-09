import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from './utils.js'


function Character(data){
  Object.assign(this, data)

  this.getDiceHtml = function(diceCount){
    this.currentDiceScore = getDiceRollArray(this.diceCount)
    this.diceArray=this.currentDiceScore.map(num =>
      `<div class='dice'>${num}</div>`).join('');
  }
  this.diceArray=getDicePlaceholderHtml(this.diceCount)

  this.maxHealth = this.health

  this.takeDamage = function(attackScoreArray){
    let totalAttackScore = attackScoreArray.reduce((totalV, currentV) => totalV + currentV)
    this.health -= totalAttackScore
    if (this.health <= 0){
      this.dead=true
      this.health=0
    }
  }

  // set a method getHealthBarHtml
  this.getHealthBarHtml=function(){
    const percent = getPercentage(this.health, this.maxHealth)
    return `<div class="health-bar-outer">
              <div class="health-bar-inner ${percent<25? "danger" : ""} "
                style="width: ${percent}%;">
              </div>
            </div>`
  }

  this.getCharacterHtml=function(){
  const {elementID, namen, avatar, health, diceCount, diceArray} = this;
  let diceHtml = this.getDiceHtml(diceCount);
  const healthBar = this.getHealthBarHtml()

  return `<div class="character-card">
      <h4 class="name"> ${namen}</h4>
      <img class="avatar" src="${avatar}"/>
      <p class="health">health: <b> ${health} </b></p>
      ${healthBar}
      <div class="dice-container">${diceArray} </div></div>
    </div>`;
  }
}

export {Character}
