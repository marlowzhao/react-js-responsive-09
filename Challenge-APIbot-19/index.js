
document.getElementById("button").addEventListener("click", function(){

  fetch("https://apis.scrimba.com/bored/api/activity")
  .then((response)=>response.json())
  .then((data)=>{
    document.getElementById("changeable").textContent =data.activity
    document.getElementById("info").textContent= '🤖 HappyBotY🦿 '
    document.getElementById("button").textContent='🦾 YEY🤖 '
    document.getElementById("container").classList.add("try")
  })
})
