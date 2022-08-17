
 function getDiceRollArray(diceCount){
  const newArray = new Array(diceCount).fill(0)
  return newArray.map(function(){
    return Math.floor(Math.random()*6)+1});
}


function getDicePlaceholderHtml (diceCount){
  return new Array(diceCount).fill(0).map(function(){
      return `<div class="placeholder-dice"></div>`
    }).join("")
  }

export {getDiceRollArray, getDicePlaceholderHtml}
