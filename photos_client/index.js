const base_url = "http://127.0.0.1:3000"
const photoService = new PhotoService(base_url)
const galleryService = new GalleryService(base_url)
const photoContainer = document.querySelector('#photos-container')

Photo.photoForm.addEventListener('submit', handleSubmit)

photoService.getPhotos()
galleryService.getGalleries()

Photo.renderForm()
Gallery.renderGalleryForm()

function handleSubmit(event){
    event.preventDefault()
    // galleryService.createGallery(event)
    photoService.createPhoto(event)
    photoService.resetForm()
}

function back(){
    photoContainer.innerHTML = ''
    photoService.getPhotos()
}


// function photoShow(){
//     const id = event.target.parentElement.dataset.id
//     fetch(`http://127.0.0.1:3000/photos/${id}`)
//     .then(resp => resp.json())
//     .then(photo => {
//         debugger
        
//         photoContainer.innerHTML = ''
//         photoContainer.innerHTML += `
//         <img src=${photo.image} />
//         <br>
//         <a id="backbttn" href="#">Back</a>
//         `
        
//         const backbttn = document.getElementById('backbttn')
//         backbttn.addEventListener('click', back)

//     })
// }



// function handleButton(event){
//     if (event.target.innerText === 'Delete'){
       
//         photoService.deletePhoto(event.target)

//     } else if (event.target.innerText === 'Edit'){
//         editPhoto(event.target)

//     }

// }
//...............TO DO...................//
// Create a Gallery Form for new galleries
// create append to dom for galleries 
// create a handle submit for galleries 
// Make galleries appear on spa
