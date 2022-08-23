
  fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=city")
  .then(res=>res.json())
  .then(data=>{
    const dataUrl = `url('${data.urls.regular}')`
    const authorName=data.user.name
    const locationCity=data.location.city
    const locationCountry=data.location.country
    const dDMmYy=new Date().toLocaleTimeString("en-us", {timeSytle: "short"})

    document.body.style.backgroundImage=dataUrl
    document.getElementById("display-author").textContent=`Created by ${authorName}`
    document.getElementById("location").textContent=`${locationCity},  ${locationCountry}`
    document.getElementById("day-hour").textContent= dDMmYy
  })
    .catch(err=>{
      // when it's wrong, Pittsburg will be displayed
      document.getElementById("display-author").textContent='Created by Scott Webb'
      document.getElementById("location").textContent='Pittsburgh, USA"'
      document.body.style.backgroundImage=`url("https://images.unsplash.com/photo-1427434973241-7f5dc143cfb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjEyMDM0NDM&ixlib=rb-1.2.1&q=80&w=1080")`
    })

  setInterval(() => {
    const dDMmYy=new Date().toLocaleTimeString("en-us", {timeSytle: "short"})
    document.getElementById("day-hour").textContent= dDMmYy
  }, 1000);

navigator.geolocation.getCurrentPosition(position=>{
  fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
  .then(res=>{
    if(!res.ok){
      throw Error('weather data unavailable!')
    }
    return res.json()
  })
  .then(data=>{
    // console.log(`${Math.round(data.main.temp)}`)
    const weatherUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    document.getElementById("w-icon").innerHTML= `<img src=${weatherUrl}>`
    document.getElementById("w-temperature").innerHTML=`<p> ${data.name} <br> ${data.weather[0].description}
    <br>${Math.round(data.main.temp)}°</p>`
    })
});
