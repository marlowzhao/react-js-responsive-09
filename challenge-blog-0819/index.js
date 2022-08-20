let postsArray=[]

const titleInput =document.getElementById("post-title")
const contentInput = document.getElementById("post-content")
const form = document.getElementById("post-form")

function renderPosts(){
  let html= ""
  for(post of postsArray){
    html += `
      <h2 class="post-title">${post.title}</h2>
      <p>"${post.body}"</p>
      <hr>
    `
  }
  document.getElementById("blog-list").innerHTML=html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(res=>res.json())
.then(data=>{
  postsArray=data.slice(0,4)
  renderPosts()
  })


  document.getElementById("post-form").addEventListener("submit", function(event){
    event.preventDefault()
    const aTitle=titleInput.value
    const aContent=contentInput.value
    const aPost={
      title: aTitle,
      body:aContent
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
      postsArray.unshift(aPost)
      renderPosts()
      // document.getElementById("blog-list").innerHTML=`
      // <h2 class="post-title">${aPost.title}</h2><p>${aPost.content}</p><hr>
      // ${document.getElementById("blog-list").innerHTML}`
      form.reset()
    })
  })
