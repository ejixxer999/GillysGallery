const base_url = "http://127.0.0.1:3000"
const photoService = new PhotoService(base_url)
const photoContainer = document.querySelector('#photos-container')

Photo.photoForm.addEventListener('submit', handleSubmit)
photoService.getPhotos()

Photo.renderForm()

function handleSubmit(event){
    event.preventDefault()
    photoService.createPhoto()
    photoService.resetForm()
}

function photoShow(){
    const dev = event.target.parentElement.dataset.id
    fetch(`http://127.0.0.1:3000/photos/${dev}`)
    .then(resp => resp.json())
    .then(photo => {
        photoContainer.innerHTML = ''
        photoContainer.innerHTML += `
        <img src=${photo.image} />
        <br>
        <a id="backbttn" href="#">Back</a>
        `
        
        const backbttn = document.getElementById('backbttn')
        backbttn.addEventListener('click', back)

    })
}


function back(){
    photoContainer.innerHTML = ''
    photoService.getPhotos()
}

function handleButton(event){
    if (event.target.innerText === 'Delete'){
       
        deletePhoto(event.target)

    } else if (event.target.innerText === 'Edit'){
        editPhoto(event.target)

    }

}

function deletePhoto(element){
   element.parentElement.remove()
   const dev = element.parentElement.dataset.id
   fetch(`http://127.0.0.1:3000/photos/${dev}`, {
       method: 'DELETE'
   })
   .then(resp => resp.json)
   .then(data => {})

}

