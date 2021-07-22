const base_url = "http://127.0.0.1:3000"
const photoService = new PhotoService(base_url)
const galleryService = new GalleryService(base_url)
const photoContainer = document.querySelector('#photos-container')
const galleryContainer = document.querySelector('#gallery-container')
document.addEventListener('DOMContentLoaded',() => {
    getEverything()
})

Photo.photoForm.addEventListener('submit', handleSubmit)
//--------------------------render forms-------------//
Photo.renderForm()
Gallery.renderGalleryForm()
//-----------Submit Button------------//
function handleSubmit(event){
    event.preventDefault()
    photoService.createPhoto(event)
    photoService.resetForm()
}
    
//-----------Back Button-----------------//
function back(){
    photoContainer.innerHTML = ''
    galleryContainer.innerHTML = ''
    getEverything()
}
//--------Single fetch for galleries with photos-------------//
function getEverything(){
    fetch ('http://127.0.0.1:3000/galleries')
    .then(resp => resp.json())
    .then(data => {
         data.forEach( p => {
            const d = new Gallery(p)
            d.appendToDOM()
             })
        })
}

