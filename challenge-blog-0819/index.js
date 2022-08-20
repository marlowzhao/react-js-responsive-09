
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(res=>res.json())
.then(data=>{
  const postArray=data.slice(0,5)
  // let postHtml=""
  // for(let post of postArray){
  //   postHtml += `<h2>${post.title}</h2><p>${post.body}</p>`
  // }
  let postHtml = postArray.map(post => `<h2 class="post-title">${post.title}</h2><p>${post.body}</p><hr>`)
  document.getElementById("blog-list").innerHTML = postHtml.join('')
  })


  document.getElementById("post-form").addEventListener("submit", function(event){
    event.preventDefault()
    const aTitle=document.getElementById("post-title").value
    const aContent=document.getElementById("post-content").value
    const aPost={
      title: aTitle,
      content:aContent
    }
    const options = {
      method:"POST",
      body: JSON.stringify(aPost),
      headers: {
        "Content-Type":"application/json"
      }
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then(res=>res.json())
    .then(aPost=> {
      document.getElementById("blog-list").innerHTML=`
      <h2 class="post-title">${aPost.title}</h2><p>${aPost.content}</p><hr>
      ${document.getElementById("blog-list").innerHTML}`
    })
  })
