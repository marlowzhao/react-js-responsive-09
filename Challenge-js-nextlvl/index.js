function getDiceRollArray(diceCount){
  const newArray = new Array(diceCount).fill(0)
  return newArray.map(function(){
    return Math.floor(Math.random()*6)+1});
}

function getDiceHtml(diceCount){
     return getDiceRollArray(diceCount).map(number => `<div class="dice">${number}</div>`).join('');
}

const hero ={
  elementID:"hero",
  namen:"hero",
  avatar:"images/wizard.png",
  health: 60,
  diceCount:3
}

const monster ={
  elementID: "monster",
  namen: "monster",
  avatar:"images/orc.png",
  health: 10,
  diceCount:1
}

function Character(data){
  this.elementID=data.elementID;
  this.namen=data.namen;
  this.avatar=data.avatar;
  this.health=data.health;
  this.diceCount=data.diceCount;

  this.getCharacterHtml=function(){
  const {elementID, namen, avatar, health, diceCount} = this
  const diceHtml = getDiceHtml(diceCount)

    document.getElementById(elementID).innerHTML=
    `<div class="character-card">
      <h4 class="name"> ${namen}</h4>
      <img class="avatar" src="${avatar}"/>
      <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container">${diceHtml} </div></div>
    </div>`;

  }

}

const wizard= new Character(hero)
const orc= new Character(monster)
wizard.getCharacterHtml()
orc.getCharacterHtml()
