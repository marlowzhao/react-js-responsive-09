
 function getDiceRollArray(diceCount){
  const newArray = new Array(diceCount).fill(0)
  return newArray.map(function(){
    return Math.floor(Math.random()*6)+1});
}

export {getDiceRollArray}
