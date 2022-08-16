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

function getDiceRollArray(diceCount){
  const newArray = new Array(diceCount).fill(0)
  return newArray.map(function(){
    return Math.floor(Math.random()*6)+1})
}

function getDiceHtml(diceCount){
     return getDiceRollArray(diceCount).map(number => `<div class="dice">${number}</div>`).join('');
}

function renderCharacter(data) {
  const {elementID, namen, avatar, health, diceCount} = data
  const diceHtml = getDiceHtml(diceCount)


  document.getElementById(elementID).innerHTML=
  `<div class="character-card">
    <h4 class="name"> ${namen}</h4>
    <img class="avatar" src="${avatar}"/>
    <p class="health">health: <b> ${health} </b></p>
    <div class="dice-container">${diceHtml} </div></div>

  </div>`;
}

renderCharacter(hero)
renderCharacter(monster)
