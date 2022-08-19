import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from './utils.js'

class Character {
 constructor(data) {
  Object.assign(this, data)
  this.maxHealth = this.health
  this.diceHtml=getDicePlaceholderHtml(this.diceCount)
}

  getDiceHtml(){
    this.currentDiceScore = getDiceRollArray(this.diceCount)
    this.diceHtml=this.currentDiceScore.map(num =>
      `<div class='dice'>${num}</div>`).join('');
  }

  takeDamage(attackScoreArray) {
    let totalAttackScore = attackScoreArray.reduce((totalV, currentV) => totalV + currentV)
    this.health -= totalAttackScore
    if (this.health <= 0){
      this.dead=true
      this.health=0
    }
  }

  // set a method getHealthBarHtml
  getHealthBarHtml(){
    const percent = getPercentage(this.health, this.maxHealth)
    return `<div class="health-bar-outer">
              <div class="health-bar-inner ${percent<25? "danger" : ""}"
                style="width: ${percent}%;">
              </div>
            </div>`
  }

  getCharacterHtml() {
    const {elementID, namen, avatar, health, diceCount, diceHtml} = this;
    const healthBar = this.getHealthBarHtml()
    return `<div class="character-card">
        <h4 class="name"> ${namen}</h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health} </b></p>
        ${healthBar}
        <div class="dice-container">${diceHtml} </div></div>
      </div>`;
  }
}

export {Character}
