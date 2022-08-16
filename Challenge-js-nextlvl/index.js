function getDiceRollArray(diceCount){
  const newArray = new Array(diceCount).fill(0)
  return newArray.map(function(){
    return Math.floor(Math.random()*6)+1});
}

const characterData ={
  hero: {
    elementID:"hero",
    namen:"hero",
    avatar:"images/wizard.png",
    health: 60,
    diceCount:3
  },
  monster: {
    elementID: "monster",
    namen: "monster",
    avatar:"images/orc.png",
    health: 10,
    diceCount:1
  }
}

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

const wizard= new Character(characterData.hero)
const orc= new Character(characterData.monster)

function render(){
  document.getElementById(orc.elementID).innerHTML=orc.getCharacterHtml()
  document.getElementById(wizard.elementID).innerHTML=wizard.getCharacterHtml()
}

render()
