function fetchImg(){
  fetch('https://randopic.herokuapp.com/images/4070')
    .then(resp => resp.json())
    .then(img => renderImg(img)) //renderImg
}

function renderImg(img){

  const getDiv = document.querySelector('#image_card')
  const imgEl = document.getElementsByTagName('img')[0].getAttribute('src')
  imgEl.innerText = img.url
  
  const getTitle = document.querySelector('h4')
  getTitle.innerText = img.name


  getDiv.append(imgEl, getTitle)

}

function postComment(formData){
  congfigObj = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }
  fetch('https://randopic.herokuapp.com/images/4070', configObj)
    .then(resp => resp.json())
    .then(comment => console.log(comment))

}

function grabFormData(){
  const comment = document.querySelector('#comment_form').value  
  // const like = document.querySelector('#likes').value
  return {comment, like}

}

function createFormListener(){ 
  const inputEl = document.querySelector('#comment_input') 
  inputEl.addEventListener('submit', function(){
    grabFormData()
    postComment();

  })
}


function main(){
  document.addEventListener('DOMContentLoaded', () => {
    console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
    let imageId = 4070
    const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
    const likeURL = `https://randopic.herokuapp.com/likes/`
    const commentsURL = `https://randopic.herokuapp.com/comments/`

    fetchImg();
    createFormListener();
  })
}
main()


// I blanked. Not enough practice on my part I guess.