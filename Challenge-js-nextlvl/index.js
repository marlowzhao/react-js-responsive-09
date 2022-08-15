const hero ={
  elementID:"hero",
  namen:"hero",
  avatar:"images/wizard.png",
  health: 60,
  diceN:[3,1,4],
  diceCount:3
}

const monster ={
  elementID: "monster",
  namen: "monster",
  avatar:"images/orc.png",
  health: 10,
  diceN: [2],
  diceCount:1
}


function renderCharacter(data) {
  const {elementID, namen, avatar, health, diceN, diceCount} = data
  let diceHtml = ''
  for (let i =0; i<diceCount; i++){
    diceHtml += `<div class="dice">${diceN[i]}</div>`
  }

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
