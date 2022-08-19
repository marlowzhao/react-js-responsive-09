
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(res=>res.json())
.then(data=>{
  const postArray=data.slice(0,5)
  // let postHtml=""
  // for(let post of postArray){
  //   postHtml += `<h2>${post.title}</h2><p>${post.body}</p>`
  // }
  let postHtml = postArray.map(post => `<h2>${post.title}</h2><p>${post.body}</p>`)
  document.getElementById("blog-list").innerHTML = postHtml.join('')
  })
