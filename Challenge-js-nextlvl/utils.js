function getDiceRollArray(diceCount){
  const newArray = new Array(diceCount).fill(0)
  return newArray.map(() => Math.floor(Math.random()*6)+1);
}


function getDicePlaceholderHtml (diceCount){
  return new Array(diceCount).fill(0).map(()=> `<div class="placeholder-dice"></div>`).join("")
  }

const getPercentage =(remainingHealth, maximumHealth) => (remainingHealth*100)/maximumHealth

export {getDiceRollArray, getDicePlaceholderHtml, getPercentage}
